import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    // template: '<div>{{ title }}</div>'
    // template: '<div>{{ getTitle() }}</div>'
    template: `
            <h2> {{ title }} </h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
            </ul>
        `
  })
  export class CoursesComponent {
      title="List of courses";

    //   getTitle() {
    //       return this.title;
    //   }

        courses;

        constructor(service: CoursesService) {
            //let service = new CoursesService();
            this.courses = service.getCourses();
        }

        // Logic for calling an HTTP service
  }