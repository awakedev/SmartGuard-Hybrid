import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { DataService} from "./_services/data.service"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

    ngOnInit() {
	  }


  constructor(private fb: FacebookService, private data: DataService){

  }


}
