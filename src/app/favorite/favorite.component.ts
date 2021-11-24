import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  
  /*
   styles: [`
    .bi{
      color:red;
    } 
  `],
  */
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  title:any;
  @Input('isFavorite') isSelected: boolean = false; 
  @Output('change') click = new EventEmitter();

  constructor() { }
  
  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}