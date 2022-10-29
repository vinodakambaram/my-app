import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public name:string="";
  public price:number=0;
  public quantity:number=0;

  public carts:any = [
    {name:'real me',price:'10000',quantity:2},
    {name:'shirt',price:'1000',quantity:4},
    {name:'headset',price:'1500',quantity:2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addtocart(){
    let cart={
      name:this.name,
      price:this.price,
      quantity:this.quantity
    }

    this.carts.push(cart);
    this.name="";
    this.price=0;
    this.quantity=0;

    alert("items added successfully!!!")
  }
  delete(i:number){
    this.carts.splice(i,1);
  }

}
