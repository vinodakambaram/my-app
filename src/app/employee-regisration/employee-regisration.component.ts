import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-regisration',
  templateUrl: './employee-regisration.component.html',
  styleUrls: ['./employee-regisration.component.css']
})
export class EmployeeRegisrationComponent implements OnInit {
  public name:string = "";
  public age:number = 0;
  public company:string = "";
  public package:number = 0;

  public employees:any = [
    {name:'durga', age:33,company:'hcl',package:6},
    {name:'teja',age:23,company:'tcs',package:13}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    let employee = {
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package
    }
    this.employees.push(employee);
  

    this.name="";
    this.age=0;
    this.company="";
    this.package=0;

    alert("Registered successfully");

  }

    delete(i:number){
      this.employees.splice(i,1);
    }

    

  }




