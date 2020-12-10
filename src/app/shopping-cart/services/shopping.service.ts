import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stablishments } from '../shared/model/stablishments.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor( private httpClient: HttpClient) { }

  geteStablishments(): Observable<Array<Stablishments>> {
    return this.httpClient.get<Array<Stablishments>>(
      `${environment.urlBase}/businesses`
    );
  }



}
