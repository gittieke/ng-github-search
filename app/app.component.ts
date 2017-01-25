import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GitHubComponent } from './components/github.component';
import { GitHubService } from './services/github.service';

@Component({
  selector: 'my-app',
  template: '<github></github>',
  directives: [GitHubComponent],
  providers: [Http, GitHubService]
})
export class AppComponent {}
