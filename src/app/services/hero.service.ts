import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes.service';
import { Observable } from 'rxjs/Observable'; // npm install rxjs
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {

  }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
