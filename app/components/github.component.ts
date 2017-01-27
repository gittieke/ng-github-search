import { Component } from '@angular/core';
import { FormModules } from '@angular/forms';
import { GitHubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  providers:  [ GitHubService ]
})

export class GitHubComponent {
  user:any;
  repos:any;
  username:string;

  constructor(private gitHubService:GitHubService){
    this.user = false;    
  }

  search(){
    this.gitHubService.updateUserName(this.username);
    this.gitHubService.getUser().subscribe(user =>{
      this.user = user;
    });
    this.gitHubService.getRepos().subscribe(repos =>{
      this.repos = repos;
    });
  }

}
