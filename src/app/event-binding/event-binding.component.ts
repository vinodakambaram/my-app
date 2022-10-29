import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    alert("clicked");
  }

  test2(){
    alert("double clicked");
  }
   
  test3(){
    alert("key up");
  }

  test4(){
    alert("key down");
  }
  
  test5(){
    alert("key press");
  }

  test6(){
    alert("mouse enter");
  }

  test7(){
    alert("mouseleave");
  }



}
