import { NotFoundError } from '../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/validators/app-error';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({ opacity : 0})),

      transition(':enter,  :leave', [
        animate(2000)
      ]),
      // transition('void <=> *', [
      //   animate(2000)
      // ]),
      // transition('void => *, * => void', [
        // style({ opacity : 0}),
        // animate(2000, style({ backgroundColor: 'white', opacity: 1}))
        // animate(2000)
      // ]),

      // transition('* => void', [
        // style({ opacity : 0}),
        // animate(2000, style({ backgroundColor: 'white', opacity: 1}))
        // animate(2000, style({ opacity: 0}))
        // animate(2000)
      // ])

    ])
  ]
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
      },
      (error: Response) => {
      if(error.status === 400){
        //this.form.setErrors(error.json())
      }else{
        alert('An unexpected error occurred.');
        console.log(error);
      }
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
    .subscribe(
      response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    (error: AppError) => {
      if(error instanceof NotFoundError){
        alert('This post has already been deleted.');
      }else{
        alert('An unexpected error occurred.');
        console.log(error);
      }
    });
  }
}
