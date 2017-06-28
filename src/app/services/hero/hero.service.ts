import { Injectable } from '@angular/core';
import { Hero } from 'app/models/hero';
import { HEROES } from 'app/services/hero/mock.heroes';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroSlowly(): Promise<Hero[]> {
    return new Promise((resolve) => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
