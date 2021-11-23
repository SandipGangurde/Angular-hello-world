import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    // template: '<div>{{ title }}</div>'
    // template: '<div>{{ getTitle() }}</div>'
    // template: `
    //         <h2> {{ title }} </h2>
    //         <ul>
    //             <li *ngFor="let course of courses">
    //                 {{course}}
    //             </li>
    //         </ul>
    //     `
    // template:`
    //     <h2> {{ title }} </h2>
    //     <h2 [textContent]="title"></h2>
        
    //     <img src="{{ imageUrl }}" />
    //     <img [src]="imageUrl" />
    // `
    /*
    template:`
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan">  </td>
                <button class="btn btn-primary" [class.active]="isActive">Save</button>
                <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Cancel</button>
            </tr>
        </table>
    `*/
    /* //Event Binding
    template:  `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" class="btn btn-primary">Save</button>
        </div>
    ` 
    */
    
    /* //Event Filtering
    template: `
        <input (keyup)="onKeyUp($event)" />
    `
    
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
    */

    /* //Template Varibles
    template: `
        <input (keyup.enter)="onKeyUp($event)" />
    `
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
    */
    /*
      //Two Way binding
    
      template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
     */
    /*
    template: `
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.rating | number:'1.1-1' }} <br/>
        {{ course.students | number }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>
    `
    */
    template: `
        {{ text | summary:15 }}
    `
  })
  export class CoursesComponent {
      title="List of courses";

    //   getTitle() {
    //       return this.title;
    //   }

        /*
        courses;
        imageUrl="https://images.indianexpress.com/2020/04/online759.jpg";
        colSpan=2;
        isActive=false;

        constructor(service: CoursesService) {
            //let service = new CoursesService();
            this.courses = service.getCourses();
        }
        */
        // Logic for calling an HTTP service
        
        /* //Event Binding
        onSave($event:any) {
            $event.stopPropagation();  //venilla javascript standard method not to click all method or stop bubbling up is stoping 

            console.log("Button was clicked", $event);
        }
        onDivClicked() {
            console.log("div was clicked")
        }
        */
        /* //Event Filtering
        onKeyUp($event:any) {
            if($event.keyCode === 13)
                console.log("ENTER was pressed")
        }

        onKeyUp() {
            console.log("ENTER was pressed")
        }

        */
        /* //Template Varibles
        onKeyUp($event:any) {
            console.log($event.target.value)
        }

        onKeyUp(email:any) {
            console.log(email)
        }
        */
        /* Two way binding
        
        email:any="sandip50sandip@gmail.com";
        onKeyUp() {
            console.log(this.email)
        }
        */

        /* //pipes
        course = {
            title: "The Complete Angular Course",
            rating: 4.9745,
            students: 30123,
            price: 190.95,
            releaseDate: new Date()
        }
        */
       
       text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  }