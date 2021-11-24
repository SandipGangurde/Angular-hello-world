import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; //'1st way of the input parameter
//import { Component, OnInit } from '@angular/core'; //2nd way of the input parameter
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavorite'] //2nd way of the input parameter
})
export class FavoriteComponent implements OnInit {
  title:any;
  @Input('isFavorite') isSelected: boolean = false; //'1st way of the input parameter

  @Output() change = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  //isFavorite: boolean = false;
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}