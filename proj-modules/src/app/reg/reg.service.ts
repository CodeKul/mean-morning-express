import { Reg } from './reg';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegService {

  constructor(
    private http: HttpClient
  ) { }

  reg(rg: Reg) {
    rg.id = `${new Date().getMilliseconds()}`

    return this.http.post(
      `http://localhost:1337/registration`,
      rg,
      {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      }
    )
  }
}
