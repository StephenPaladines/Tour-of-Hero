import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

// Routes tell the Router which view to display when a user
// clicks a link or pastes a url
// path = string, component = view/component
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroComponent }
];

// Initializes the router and starts it listening for browseer location changes
// The forRoot() method supplies the service providers and directives needed for routing, 
// and performs the initial navigation based on the current browser URL.
@NgModule({
  // Adds the RoutingModule to the AppRoutingModule imports array
  imports: [RouterModule.forRoot(routes)],
  // Export so it can become available to all
  exports: [RouterModule]
})

export class AppRoutingModule { }