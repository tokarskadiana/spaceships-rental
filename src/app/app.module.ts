import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import {routing} from './app.routing';
import {SpaceshipService} from './services/spaceship.service';
import {DataListModule} from 'primeng/datalist';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpaceshipDetailsComponent } from './components/spaceship-details/spaceship-details.component';
import { HomeComponent } from './components/home/home.component';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {StationService} from './services/station.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchShipFormComponent } from './components/search-ship-form/search-ship-form.component';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsListComponent,
    NavbarComponent,
    SpaceshipDetailsComponent,
    HomeComponent,
    SearchShipFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataListModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule,
    routing
  ],
  providers: [SpaceshipService, StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
