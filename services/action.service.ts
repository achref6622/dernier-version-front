import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private url = Config.BASE_URL + '/action';
  constructor(private  httpClient: HttpClient) {
  }

  /*public getAll(): Observable<any[]> {

  }*/
}
