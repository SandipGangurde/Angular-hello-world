import { HttpClient } from '@angular/common/http';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from '../common/validators/app-error';
// import { Http } from '@angular/http';
import { Inject, Injectable, Input } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators'
// import { promises } from 'dns';
// import { throwError } from 'rxjs';

@Injectable()
export class DataService {
  // @Input() url : any;
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response));
  }

  // get(id:any) { 
  //   return this.http.get(this.url + '/' + id)
  //     .map(response => response.json())
  //     .catch(this.handleError);    
  // }
   get(id:any) { 
    return this.http.get(this.url + '/' + id).pipe(
      map(response => response));
      // .catch(this.handleError);    
  }

  create(resource:any) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response => response));
      // .catch(this.handleError);
  }

  update(resource:any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      map(response => response));
      // .catch(this.handleError);
  }

  delete(id:any) {
    return this.http.delete(this.url + '/' + id).pipe(
      map(response => response))
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
      // return Observable.throwError(new BadInput(error.json()));
      // return ( (error: HttpErrorResponse) => { throwError(error) })

    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
