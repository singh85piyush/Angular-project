import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product:any;

  constructor(){
    this.product=[
      {
        "productName":"Mobile",
        "company":"Redmi",
        "price":"28000"
      },
      {
       "productName":"Laptop",
        "company":"HP",
        "price":"48000" 
      },
      {
        "productName":"TV",
        "company":"Sony",
        "price":"50000"
      }
    ];
  }

}
