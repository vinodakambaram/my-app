import { Component, OnInit } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  public gmails:any = [];

  constructor(private _mailsservice:MailsService) {

  this._mailsservice.getMails().subscribe(
    (data:any)=>{
      this.gmails = data;
    },
    (err:any)=>{
      alert("internal server error");
    }

  )
   }

  ngOnInit(): void {
  }

}
