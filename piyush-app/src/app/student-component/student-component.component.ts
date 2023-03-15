import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {

  niteshStudent:Student={
    id:1234,
    name:"Nitesh",
    marks:78,
    fee:40000
  };

}
