import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any;
  
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
    switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.service.getAll()
    }))
      .subscribe(followers => this.followers = followers);
    

    // this.route.paramMap
    //   .subscribe(params => {

    //   });
    
      // let id = this.route.snapshot.paramMap.get('id');
    
    // this.route.queryParamMap
    //   .subscribe(param => {

    //   });

    // let pageNumber = this.route.snapshot.queryParamMap.get('page');
    // console.log(pageNumber);

    // this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
  }

}
