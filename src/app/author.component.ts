import { Component } from "@angular/core";
import { AuthorService } from "./author.service";

@Component({
    selector: "authors",
    template: `
        <h1>{{authors.length}} {{ title }}</h1>
        
        <ul>
            <li *ngFor="let author of authors"> 
                {{author}} 
            </li>
        </ul>
    `
})

export class AuthorComponent{
    title = "Authors";
    authors;

    constructor(service: AuthorService){
        this.authors = service.getAuthors();
    }
}
