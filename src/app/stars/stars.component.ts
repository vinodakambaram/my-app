import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  public rating:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
