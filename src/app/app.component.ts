import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/models/hero';
import { HeroService } from 'app/services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit() : void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = this.selectedHero && this.selectedHero.id === hero.id ? undefined : hero;
  }

  getHeroes(): void {
    this.heroService.getHeroSlowly().then((heroes) => {
      this.heroes = heroes;
    });
  }
}
