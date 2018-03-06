import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsListComponent} from './components/spaceships-list/spaceships-list.component';
import {SpaceshipDetailsComponent} from './components/spaceship-details/spaceship-details.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'spaceships/list', component: SpaceshipsListComponent },
  { path: 'spaceships/:id', component: SpaceshipDetailsComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
