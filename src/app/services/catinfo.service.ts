import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Breed,CatfactBreedResponse } from '../models/breeds';
import { Fact } from '../models/fact';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap, throwError } from 'rxjs';

const API_URL = 'https://catfact.ninja' as const;

@Injectable({
  providedIn: 'root'
})

export class CatinfoService {

  public readonly allCatBreeds$: Observable<Breed[]>;
  public readonly randomFact$: Observable<Fact>;

  //https://catfact.ninja/breeds
  constructor( private http: HttpClient, private route: Router,) 
   {

    this.allCatBreeds$ = this.http.get<CatfactBreedResponse>(`${API_URL}/breeds`).pipe(
      map((response: CatfactBreedResponse): Breed[] => response.data),
    );
    
    this.randomFact$ = this.http.get<Fact>(`${API_URL}/fact`);
   }

  // getAllCatBreeds() : Observable<Breed[]> {
  //     return this.http.get<Breed[]>(API_URL + 'breeds');
  // }

  // getRandomFact() : Observable<Fact[]>{
  //   return this.http.get<Fact[]>(API_URL + 'fact');
  // }
  
}
