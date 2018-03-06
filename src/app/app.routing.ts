import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsListComponent} from './components/spaceships-list/spaceships-list.component';
import {SpaceshipDetailsComponent} from './components/spaceship-details/spaceship-details.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'spaceships/list', component: SpaceshipsListComponent },
  { path: 'spaceships/:id', component: SpaceshipDetailsComponent },
  { path: '**', redirectTo: 'spaceships/list' }
];

export const routing = RouterModule.forRoot(appRoutes);
