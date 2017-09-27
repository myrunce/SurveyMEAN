import { Router } from '@angular/router';
import { MainService } from './../main.service';
import { Option } from '../option';
import { Survey } from './../survey';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  survey: Survey = new Survey();
  option1: Option = new Option();
  option2: Option = new Option();
  option3: Option = new Option();
  option4: Option = new Option();
  id;

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._mainService.addSurvey(this.survey, (survey) => {
      this.id = survey._id;
      console.log(this.id);
      this._mainService.addOption(this.id, this.option1);
      this._mainService.addOption(this.id, this.option2);
      this._mainService.addOption(this.id, this.option3);
      this._mainService.addOption(this.id, this.option4);
      console.log('ALL OPTIONS ADDED!');
      this.survey = new Survey();
      this.option1 = new Option();
      this.option2 = new Option();
      this.option3 = new Option();
      this.option4 = new Option();
      this.id = null;
      this._router.navigateByUrl('/dashboard');
    });
  }
}
