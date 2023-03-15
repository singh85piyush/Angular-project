import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:String="";
  password:String="";
  errorMessage:String="";
  loginResponse:any;

  constructor(private router:Router,private http:HttpClient){

  }

  submit(){

    let CallRestApi=this.http.get("http://localhost:8080/login?username="+this.userName+"&password="+this.password);
    CallRestApi.subscribe((res)=>this.loginResponse);

    console.log("username..."+this.userName);
    console.log("username..."+this.password);

    this.loginResponse= JSON.stringify(res);
  

    if(this.loginResponse =="true"){
      this.router.navigateByUrl("/home");
    }
    else
    {
    this.errorMessage="Give here correct user & password";
    this.userName ="";
    this.password ="";
  }
  }
}
