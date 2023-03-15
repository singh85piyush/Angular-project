import { Component } from '@angular/core';
import { NatixisService } from '../natixis.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users:any;
  empDetails:any;
  userEmp: any;

  constructor(userEmp:NatixisService){
    this.users=[
      {
        "id":12,
        "name":"Harsh",
        "email":"harsh@12gmail.com"
      },
      {
        "id":123,
        "name":"Amit",
        "email":"amit@123gmail.com" 
      }
    ];
    
  }

  ngonInit(){
    this.empDetails = this.userEmp.getEmpData();
  }

}
