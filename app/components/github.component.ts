import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
  moduleId: `module.id`,
  selector: `github`,
  templateUrl: `app/components/github.component.html`,
  providers:  [ GitHubService ]
})

export class GitHubComponent {
  user:any;

  constructor(private gitHubService:GitHubService){
    console.log('GitHubComponent constructor');
    /*
    this.gitHubService.getUser().subscribe(user=>{
      this.user = user;
      console.log(this.user);
    });*/
  }
}
