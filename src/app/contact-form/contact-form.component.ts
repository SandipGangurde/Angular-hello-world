import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Form'},
    {id: 3, name: 'Comment'}
  ];
  log(x:any) { 
    console.log(x); 
  }

  submit(f:any){
    console.log(f)
    console.log(f.value)
  }
}
