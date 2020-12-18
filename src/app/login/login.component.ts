import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:string;
success:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.success ="";
    this.error="";
    let uname =  $('#uname').val();
    let pwd = $('#pwd').val();
    let registerArr = JSON.parse(localStorage.getItem('regUser'));
    if(registerArr){
      registerArr.forEach(element => {
        if(element.userName === uname && element.password === pwd){
          let self = this;
          this.success = "Login Successfully"
          setTimeout(function(){ self.router.navigate(["/Home"]); }, 3000);
        }else{
          this.error ="Invalid Username or password";
        }
      });
    }
  }
}
