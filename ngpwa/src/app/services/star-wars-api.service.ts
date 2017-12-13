import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export const API_URL = 'https://swapi.co/api';

@Injectable()
export class StarWarsApiService {
  constructor(private http: HttpClient) { }

  public searchCharacters(searchQuery: string): Observable<Character[]> {
    const url = `${API_URL}/people/`;
    const query = `${url}?search=${searchQuery}`;
    return this.getAllPages(url, query)
      .reduce((result, currentPage) => {
        if (result) result = result.concat(currentPage.results);
        else result = currentPage.results;
        return result;
      }, [])
      .map(data => {
        return data;
      })
  }

  public scanCharacters(searchQuery: string): Observable<Character[]> {
    const url = `${API_URL}/people/`;
    const query = `${url}?search=${searchQuery}`;
    return this.getAllPages(url, query)
      .scan((result, currentPage) => {
        if (result) result = result.concat(currentPage.results);
        else result = currentPage.results;
        return result;
      }, [])
      .map(data => {
        return data;
      })
  }

  getAllPages(url: string, query: string): Observable<any> {
    const httpParams = this.queryToHttpParams(query);
    return this.getSinglePage(url, httpParams)
      .concatMap(res => {
        if (!res.next) {
          return Observable.of(res);
        } else {
          return this.getAllPages(url, res.next)
            .startWith(res);
        }
      })
  }

  /**
   * Http get request on the given apiUrl using the httpParams as query.
   * @param apiUrl 
   * @param httpParams 
   */
  getSinglePage(apiUrl: string, httpParams: HttpParams): Observable<any> {
    // Define the Http parameters first
    return this.http.get(apiUrl, { params: httpParams })
      .map(data => data);
  }

  /**
   * Takes a url as input and gets its query to transform it to httpParams
   * @param url The URL to transform
   */
  queryToHttpParams(url: string): HttpParams {
    const splitQuery = url.split('?');
    const query = splitQuery.length === 2 ? splitQuery[1] : null;
    if (query) {
      let httpParams = new HttpParams();
      for (let param of query.split('&')) {
        const paramTuple = param.split('=');
        if (paramTuple.length === 2) httpParams = httpParams.set(paramTuple[0], paramTuple[1]);
      }
      return httpParams;
    } else return null;
  }
}
