import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id')!;
    //     // service.getProfile(id);
    //     console.log(id);
    //   });
    // console.log("githubProfile OnInit");
  }

}
