import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NatixisService {

  getEmpData(){
    return[{
      "empID":1,
      "empName":"Ravi",
      "salary":96000
    },
    {
      "empID":2,
      "empName":"Piyush",
      "salary":86000
    }
    ];
  }

  constructor() { }
}
