import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Vente} from '../model/vente';
import {Action} from '../model/action';


@Injectable({
  providedIn: 'root'
})
export class VenteService {
  private url = Config.BASE_URL + '/vente';

  constructor(private httpClient: HttpClient) { }

  public save(vente: Vente , id: number): Observable<any> {
    return this.httpClient.post(Config.BASE_URL,  { vente: Vente, id: Number } );
  }

}
