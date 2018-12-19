import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


	get topStyle(){
		return (( 900 - (this.scrollY * 0.7)) + 'px');
	}

	scrollY:number = 5;

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
// do some stuff here when the window is scrolled
	 this.scrollY = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
	}
}
