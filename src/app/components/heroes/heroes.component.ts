import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../.././models/hero';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs/Observable'; // npm install rxjs
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-horoes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
