import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes.service';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
