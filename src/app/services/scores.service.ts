import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, observable, Observable } from 'rxjs';
import { Scores } from '../shared/scores';
import { Response } from '../shared/response';
import { Items } from '../shared/items';
import { Competition } from '../shared/competition';
import { Team } from '../shared/team';
import { Venue } from '../shared/venue';
import { Toss } from '../shared/toss';



@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor( private http: HttpClient) { }

  getScores(): Observable<Scores[]>{
    return this.http.get<Scores[]>("https://rest.entitysport.com/v2/matches/?status=2&format=6&token=437214169d9be2a73e91d22f76f68b52&per_page=10&&paged=1");
  }



}
