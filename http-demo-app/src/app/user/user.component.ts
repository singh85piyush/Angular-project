import { Component } from '@angular/core';
//import { constructor } from 'jasmine';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userData:any;
  searchVal:string="";

  constructor(private natihttp:HttpClient){
  
    
  }
  postData(){
    console.log("user got clicked....."+this.searchVal);
    let clientData = this.natihttp.get("http://localhost:8080/searchMarks",{params:{"marks":this.searchVal}});

    clientData.subscribe((data: any)=>this.userData =data);
  }

}
