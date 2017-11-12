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

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
