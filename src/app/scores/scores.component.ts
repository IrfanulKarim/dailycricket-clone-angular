import { Component, OnInit, Inject } from '@angular/core';
import { ScoresService } from '../services/scores.service';
import { Scores } from '../shared/scores';
import { Response } from '../shared/response';
import { Items } from '../shared/items';
import { Competition } from '../shared/competition';
import { Team } from '../shared/team';
import { Venue } from '../shared/venue';
import { Toss } from '../shared/toss';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scores: Scores[];
  dataSource: Scores[];
  scoreerrMess: string;

  status_str: string;
  TeamA: string;
  FlagA: string;
  vs: string;
  FlagB: string;
  TeamB: string;
  date: Date;

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.scoresService.getScores()
    .subscribe((scores) => {this.scores = scores; this.dataSource = scores; },
    errmess => this.scoreerrMess = <any>errmess);


  }

  displayedColumns: string[] = ['status_str', 'TeamA', 'FlagA', 'vs', 'FlagB', 'TeamB', 'date'];
  

}
