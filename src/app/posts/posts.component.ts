import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) { 

  }

  ngOnInit(): void {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
    }, error => {
      alert('An unexpected error occurred. ');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

      this.service.createPost(post)
        .subscribe(response => {
          this.posts.splice(0, 0, post);
          //  console.log(response);
      });
  }
  updatePost(post: HTMLInputElement){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post: HTMLInputElement) {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
