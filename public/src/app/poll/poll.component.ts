import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  survey;
  id;
  option;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.getSurvey();
    });
  }

  ngOnInit() {
  }

  getSurvey() {
    this._mainService.getOneSurvey(this.id, (survey) => {
      console.log(survey);
      this.survey = survey;
    });
  }

  vote(id) {
    this._mainService.findOption(id, (theOption) => {
      this.option = theOption[0];
      this.option.votes++;
      this._mainService.updateOption(id, this.option, (option) => {
        console.log('VOTED');
      });
      this.getSurvey();
    });
  }
}
