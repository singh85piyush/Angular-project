import { Component } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {

  products:any;

  constructor(){
    this.products=[{
      id:123,
      name:"vivo15",
      brand:"vivo",
      price:22000
    },
      {
        id:1234,
        name:"samsungs11",
        bhand:"samsung",
        price:42000
      },
      {
        id:12345,
        name:"oneplus10",
        bhand:"Oneplus",
        price:50000 
      }];
    }

    
  }
