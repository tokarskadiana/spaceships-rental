import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
