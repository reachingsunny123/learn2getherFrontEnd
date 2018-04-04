import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppError } from '../../common/app-error';
import { AccessDenied } from '../../common/access-denied';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  signIn(credentials){
    this.authService.login(credentials)
    .subscribe(result =>{
      if(result){
        this.router.navigate(['/']);
      }else{
        this.invalidLogin = true;  
      }
      },
      (error:AppError)=>{
        console.log(error);
        console.log('Error 22');
        this.invalidLogin = true;
        if(error instanceof AccessDenied){
          console.log('Error 33');
          this.invalidLogin = true;
        }
    })
  }

}
