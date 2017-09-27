import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveys;
  constructor(private _mainService: MainService) {
    this._mainService.retrieveSurveys((surveys) => {
      this.surveys = surveys;
    });
  }

  ngOnInit() {
  }

  delete(id) {
    this._mainService.deleteSurvey(id, (surveys) => {
      this.surveys = surveys;
    });
  }
}
