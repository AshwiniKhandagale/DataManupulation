import * as $ from 'jquery';

import { CanActivate, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 registerUserArr : [] = [];
 error : string = "";
 success :string ="";
  constructor(private router: Router,) { }

  ngOnInit(): void {
   localStorage.setItem('regUser',JSON.stringify(this.registerUserArr))
  }
  onRegisterUser(){
  this.error = "";
   let uname =  $('#uname').val();
   let pwd = $('#pwd').val();
   let cPwd = $('#cpwd').val();
   if(pwd != cPwd){
    this.error = " Passwords do not match."
   }else{
     let registerArr = JSON.parse(localStorage.getItem('regUser'));
     this.success = "Register User SuccessFully"
     registerArr.push({
      userName:uname,
      password : pwd
     })
     let self = this;
     console.log('registerArr: ', registerArr);
     localStorage.setItem('regUser',JSON.stringify(registerArr))
     setTimeout(function(){ self.router.navigate(["/"]); }, 3000);

   }
  }
}
