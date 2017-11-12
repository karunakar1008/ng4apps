import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../.././models/hero';
@Component({
  selector: 'app-horoes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit() {
  }

}
