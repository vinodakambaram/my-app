import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];
  public term:string = "";
  public column:string="";
  public order:string="";

  constructor(private _bankservice:BankService,private router:Router) { 
    this._bankservice.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._bankservice.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      }
    )

  }
  pagination(page:number){
    this._bankservice.getPageAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>(
        alert("internal server error")
      )
    )
  }
  sort(){
    this._bankservice.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  delete(id:string){
    this._bankservice.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  view(id:string){
    this.router.navigateByUrl('/dashboard/bankdetails/'+id);
  }
}
