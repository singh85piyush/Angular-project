import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  
  empData:any;

  constructor(private http:HttpClient){

    let empRestApi = this.http.get("http://localhost:8080/all");
    empRestApi.subscribe((Response: any)=>this.empData=Response);
  }

  }

