import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AccessDenied } from '../common/access-denied';
import { AppError } from '../common/app-error';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'



@Injectable()
export class AuthService {

  constructor(private http:Http) {
  }

   login(credentials){
     return this.http.post(environment.endPoint +"/auth/login",JSON.stringify(credentials))
     .catch((error:Response)=>{
      console.log(error);
       if(error.status ===401){
              console.log('Error');
             return Observable.throw(new AccessDenied(error.json));
       }
       return Observable.throw(new AppError(error.json));
     })
     .map(response =>{
      console.log(response.headers);
       let result = response.headers;
       console.log(result);
       if(result && result.get('Authorization')){
         localStorage.setItem('Authorization',result.get('Authorization'));
         return true;
       }
       return false;
     })
   }

   logout(){
     localStorage.removeItem('Authorization');
   }

   isLoggedIn(){
     return tokenNotExpired('Authorization');
   }

   get currentUser(){
    let token = localStorage.getItem('Authorization');
    if(!token) return null;
    let userDetails = new JwtHelper().decodeToken(token);
    let roles = userDetails.roles;
    let isAdmin = false;

    for(let index = 0; index < roles.length; ++index) {
      let entry = roles[index];
      if (entry === "ADMIN") {
          isAdmin = true;
          break;
      }
    }
    userDetails['isAdmin']=isAdmin;
    console.log(userDetails);
    return userDetails;
   }

  
}
