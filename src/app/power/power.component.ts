import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  public Number:number = 0;
  public result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
   
  square(){
    this.result = this.Number*this.Number;
  }
  cube(){
    this.result = this.Number*this.Number*this.Number;
  }

}
