import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import {routing} from './app.routing';
import {SpaceshipService} from './services/spaceship.service';


@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [SpaceshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
