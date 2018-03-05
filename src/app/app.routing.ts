import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsListComponent} from './components/spaceships-list/spaceships-list.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'spaceships/list', component: SpaceshipsListComponent },
  { path: '**', redirectTo: 'spaceships/list' }
];

export const routing = RouterModule.forRoot(appRoutes);
