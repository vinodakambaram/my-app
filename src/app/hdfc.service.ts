import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdfcService {

  public balance:number = 0;

  constructor() { }

  deposit(amount:number){
    this.balance=this.balance+amount;
  }

  withdraw(amount:number){
    this.balance=this.balance-amount;
  }

  getBalance(){
    return this.balance;
  }
}
