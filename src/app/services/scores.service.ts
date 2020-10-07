import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor( private http: HttpClient) { }

  getScores(){
    return this.http.get("https://rest.entitysport.com/v2/matches/19899/live?token=437214169d9be2a73e91d22f76f68b52");
  }



}
