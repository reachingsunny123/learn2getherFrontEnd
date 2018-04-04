import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class RegisterService extends DataService{

  constructor(private httpClient: HttpClient,http:Http) {
    super('http://localhost:8080/customers',http);
  }

   submitRegisterData(formdata: FormData): Observable<HttpEvent<{}>> {
      let headers = new HttpHeaders();
      let token = localStorage.getItem('Authorization');
      headers.append('Authorization', token);
      const req = new HttpRequest('POST', 'http://localhost:8080/customers', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    }
    );

    return this.httpClient.request(req);
  }

  
}
