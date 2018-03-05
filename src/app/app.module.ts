import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import {routing} from './app.routing';
import {SpaceshipService} from './services/spaceship.service';
import {DataListModule} from 'primeng/datalist';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataListModule,
    routing
  ],
  providers: [SpaceshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
