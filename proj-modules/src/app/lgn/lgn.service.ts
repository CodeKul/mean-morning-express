import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LgnService {

  constructor(
    private http: HttpClient
  ) { }

  login(usNm : string, pass : string) {
    return this.http.post(`http://localhost:1337/registration/login`, {
      usNm : 'android',
      pass : '123456'
    })
  }
}
