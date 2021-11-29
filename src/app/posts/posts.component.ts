import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url)
    .subscribe(response => {
      // console.log(response);
      this.posts = response;
    })
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.http.post(this.url, post)
      .subscribe(response => {
        
        this.posts.splice(0, 0, post);
        //  console.log(response);
      })
  }

  ngOnInit(): void {
  }

}
