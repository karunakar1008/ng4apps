import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes.service';
import { Observable } from 'rxjs/Observable'; // npm install rxjs
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
