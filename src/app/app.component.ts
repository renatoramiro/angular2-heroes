import { Component } from '@angular/core';
import { Hero } from 'app/models/hero';
import { HeroService } from 'app/services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = this.selectedHero && this.selectedHero.id === hero.id ? undefined : hero;
  }
}
