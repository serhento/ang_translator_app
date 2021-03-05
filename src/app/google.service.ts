import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleService {
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj) {
    return this._http.post(url, obj);
  }
}

const url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCOCNLbhXKtxwTkfdZ2bOzH3sF0vU3Ffpw';

export class GoogleObj{

  q: string;
  source: string = 'ru';
  target: string = 'en';
  format: string = 'text';

  constructor() {

  }
}
