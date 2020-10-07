import { Component, OnInit, Inject } from '@angular/core';
import { ScoresService } from '../services/scores.service';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  score: any;

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.scoresService.getScores()
    .subscribe((score) => this.score = score);
    console.log(this.score);

    

  }

}
