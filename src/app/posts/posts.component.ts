import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(http: HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      // console.log(response);
      this.posts = response;
    })
  }

  ngOnInit(): void {
  }

}
