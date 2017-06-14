import { Injectable } from '@angular/core';
import { Hero } from 'app/models/hero';
import { HEROES } from 'app/services/hero/mock.heroes';

@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

}
