import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Router} from "@angular/router";
import { DataService} from "../../_services/data.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router, private fb: FacebookService, private data:DataService) {

    let initParams: InitParams = {
      appId: '187481808674854',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
    

  }

  ngOnInit() {
  }

  loginWithFacebook(): void {
 
    this.fb.login()
      .then((response: LoginResponse) => {
        this.data.setAuthed(true);
        this._router.navigateByUrl("profile");
      })
      .catch((error: any) => {
        alert("Error authenticating you with Facebook!");
        console.log(error);
      });
 
  }

}
