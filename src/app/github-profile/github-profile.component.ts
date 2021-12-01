import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { }
  constructor(private router: Router){

  }

  ngOnInit(): void {

    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id')!;
    //     // service.getProfile(id);
    //     console.log(id);
    //   });
    // console.log("githubProfile OnInit");
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }

}
