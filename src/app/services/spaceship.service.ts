import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Spaceship} from '../models/spaseship.model';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable()
export class SpaceshipService {

  public searchFilters: FormGroup;
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Spaceship[]> {
    return this.http.get<Spaceship[]>('../../assets/mockedData/spaceships.json');
  }
}
