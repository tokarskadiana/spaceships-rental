import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Spaceship} from '../models/spaseship.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpaceshipService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Spaceship[]> {
    return this.http.get<Spaceship[]>('../../assets/mockedData/spaceships.json');
  }
}
