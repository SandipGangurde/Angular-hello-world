import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'hello-world';
  post = {
    title:"Title",
    isFavorite:true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs);
  }

  tweet = {
    body : '...',
    likesCount: 10,
    isLiked:true
  }
  
  courses : any = [];

  // ngSwitchCase start
  viewMode='map';
  // ngSwitchCase end

  //ngFor start
  /*
  courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'},
  ];*/
  // courses:any;
  //ngFor end
  //<!-- ngFor Change detection start -->
  onAdd() {
    this.courses.push({id: 5, name:'course5'});
  }

  onRemove(course:any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course:any){
    course.name = "UPDATED";
  }
  //<!-- ngFor Change detection end -->
  
  loadCourses(){
    this.courses = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},
      {id:4, name:'course4'},
    ];
  }

  trackCourse(index:any, course:any) {
    //return course ? this.courses.id : this.courses.id;
  }

  //ngStyle start
  canSave=false;
  //ngStyle end

  //Safe traversal operator start
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
  //safe traversal operator end
}
