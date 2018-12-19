import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss']
})
export class FeaturesPageComponent implements OnInit {

	features:any = [
		{
			"cover" : "S&R Data Sharing",
			"detail" : "Within the application you have the ability to view thousands of articles",
			"img" : ""
		},
		{
			"cover" : "Survival Article",
			"detail" : "Within the application you have the ability to view thousands of articles",
			"img" : ""
		},
	]

  constructor() { }

  ngOnInit() {
  }



}
