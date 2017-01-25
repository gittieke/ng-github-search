import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username='gittieke';

  constructor(private http: Http){
    console.log('GitHub Service is started...');
  }

  getUser(){
   return this.http.get('https://api.github.com/users/'+this.username)
    .map(res => res.json());
  }
}
