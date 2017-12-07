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
  private characters$: Observable<Character[]>;
  private searchQuery: string;

  constructor(private starWarsApiService: StarWarsApiService) { }

  ngOnInit() {
  }

  search(){
    console.log(this.searchQuery);
    this.characters$ = this.starWarsApiService.searchCharacter(this.searchQuery);
  }

}
