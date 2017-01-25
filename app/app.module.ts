import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';

import { AppComponent }  from './app.component';
import { GitHubComponent }  from './components/github.component';

import { GitHubService }  from './services/github.service';
import { Logger }  from './logger.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GitHubComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ GitHubService, Logger, Http ]
})
export class AppModule { }
