import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class StarWarsApiService {

  constructor(private http: HttpClient) { }

  public searchCharacter(searchQuery: string): Observable<Character[]> {
    return this.http.get('https://swapi.co/api/people/', {
      params: new HttpParams().set('search', searchQuery)
    }).map(data => {
      return data['result'];
    });
  }

}
