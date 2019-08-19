import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
// The ActivatedRoute holds information about the route to this instance of the 
// HeroDetailComponent. This component is interested in the route's parameters extracted 
// from the URL. The "id" parameter is the id of the hero to display.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // Updates the hero component with the selected hero from the user input
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
  	this.getHero();
  }

  getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
