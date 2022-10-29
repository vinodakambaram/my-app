import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts:any = [];

  constructor(private _postservice:PostService) {
    this._postservice.getFeed().subscribe(
      (data:any)=>{
        this.posts = data;
      },
      (err:any)=>{
        alert("intternal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
