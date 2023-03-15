import { Component } from '@angular/core';
import { NatixisService } from '../natixis.service';
import { UserProductService } from '../user-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:any;
  empDetails: { empID: number; empName: string; salary: number; }[];

  constructor(natiService:NatixisService){
    this.empDetails = natiService.getEmpData();
  }

}
