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

    /*template: `
        <input (keyup.enter)="onKeyUp($event)" />
    `
    */
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
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
        /*
        onKeyUp($event:any) {
            console.log($event.target.value)
        }
        */
        onKeyUp(email:any) {
            console.log(email)
        }
        
  }