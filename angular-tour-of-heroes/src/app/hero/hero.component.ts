import { Component, OnInit } from '@angular/core';
// Defines the hero object (id & name)
import { Hero } from '../hero';
// Provides the hero data
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  // Selectedhero variable of type hero (Not assigned)
  // Used for HTML component of hero view
  selectedHero: Hero;
  // A componenet property that exposes the 'HEROES' array for binding (Alias)
  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  // No longer needed (check before deleting)
  // onSelect(hero: Hero): void {
  //   // Assigning the hero from the template to the component, selectedHero
  //   this.selectedHero = hero;
  // }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
