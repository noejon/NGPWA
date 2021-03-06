import { Observable } from 'rxjs/Observable';
import { StarWarsApiService } from './../services/star-wars-api.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {
  characters$: Observable<Character[]>;
  searchQuery: string;

  constructor(private starWarsApiService: StarWarsApiService) { }

  ngOnInit() {
  }

  search(){
    this.characters$ = this.starWarsApiService.searchCharacters(this.searchQuery);
  }

  scan(){
    this.characters$ = this.starWarsApiService.scanCharacters(this.searchQuery);
  }

}
