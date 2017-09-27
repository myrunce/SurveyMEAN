import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  addSurvey(survey, callback) {
    return this._http.post(`/api/surveys`, survey)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  retrieveSurveys(callback) {
    this._http.get('/api/surveys').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneSurvey(id, callback) {
    this._http.get('/api/surveys/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addOption(id, option) {
    return this._http.put('/api/surveys/' + id, option)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        return response.json();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findOption(id, callback) {
    this._http.get('/api/options/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateOption(id, option, callback) {
    this._http.put('/api/options/' + id, option)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteSurvey(id, callback) {
    this._http.delete('/api/surveys/' + id).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
