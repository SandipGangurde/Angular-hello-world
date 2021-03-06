import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url);
  }

  createPost(post:any){
    return this.http.post(this.url, post);
  }

  updatePost(post:any){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id:any){
    return this.http.delete(this.url + '/' + id)
    // .catch((error: Response) => {
    //   Observable.throw new Error("");
      
    // });
  }
}
  // deletePost(id:any){
  //   return this.http.delete(this.url + '/' + id).pipe(
  //     catchError((error:HttpErrorResponse) => {
  //       if (error.status === 404) {
  //         return throwError(new NotFoundError());
  //       }
  //       return throwError(new AppError(error));
  //   })
  // }
//}