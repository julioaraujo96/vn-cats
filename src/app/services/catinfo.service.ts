import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Breeds } from '../models/breeds';
import { Fact } from '../models/fact';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';

const API_URL = 'https://catfact.ninja/';

@Injectable({
  providedIn: 'root'
})

export class CatinfoService {

  //https://catfact.ninja/breeds
  constructor( private http: HttpClient, private route: Router,) { }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}


  getAllCatBreeds() : Observable<Breeds[]> {
      return this.http.get<Breeds[]>(API_URL + 'breeds');
  }

  getRandomFact() : Observable<Fact[]>{
    return this.http.get<Fact[]>(API_URL + 'fact');
  }
  
}
