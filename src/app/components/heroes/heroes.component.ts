import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../.././models/hero';

import { HEROES } from '../../services/mock-heroes.service';
@Component({
  selector: 'app-horoes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes = HEROES;
 
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
