import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

export class DataService {
  
  constructor(private url:string, private http : Http) { }

  getAll(){
    let options = this.generateAuthorizationHeader();
      console.log(options);
      return this.http.get(this.url,options)
      .map(response => response.json());
  }

  create(resource){
      let options = this.generateAuthorizationHeader();
      console.log(options);
      return this.http.post(this.url,options,resource)
      .map(response => response.json());
  }

  update(resource){
    let options = this.generateAuthorizationHeader();
    console.log(options);
    return this.http.put(this.url + '/' + resource.id,options,resource)
    .map(response => response.json());
  }

  delete(id){
    let options = this.generateAuthorizationHeader();
    return this.http.delete(this.url + '/' + id,options)
    .map(response => response.json());
  }

  generateAuthorizationHeader():RequestOptions{
    
    const headers = new Headers();
    let token = localStorage.getItem('Authorization');
    headers.append('Authorization', token);
    const options = new RequestOptions({headers: headers});
    return options;
  }


}
