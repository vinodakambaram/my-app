 import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-veicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VeiclesComponent implements OnInit {

  public vehicles:any = [];

  constructor(private _vehiclesservice:VehiclesService) {
    this._vehiclesservice.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
