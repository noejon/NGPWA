import { Character } from './../models/character';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.css']
})
export class CharacterDescriptionComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit() {
  }

}
