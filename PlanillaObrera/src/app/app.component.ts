import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { Administrator } from './_models/Administrator'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Administrator;

  constructor(
    private authenticationService: AuthenticationService
    ){
      this.authenticationService.user.subscribe(x => this.user = x);
    }

    

  title = 'PlanillaObrera';
}
