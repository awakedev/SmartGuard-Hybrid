import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangers-page',
  templateUrl: './dangers-page.component.html',
  styleUrls: ['./dangers-page.component.scss']
})
export class DangersPageComponent implements OnInit {

		lat:any = 54.0742;
	lng:any = -2.8650;


  constructor() { }

  ngOnInit() {
  }

}
