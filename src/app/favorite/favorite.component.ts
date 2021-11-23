import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  title:any;
  isFavorite = true;
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  private isPreposition(word: boolean){
    
  }
  
}
