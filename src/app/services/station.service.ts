import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StationService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Station[]> {
    return this.http.get<Station[]>('../../assets/mockedData/stations.json');
  }
}
