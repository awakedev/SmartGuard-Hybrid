import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from "../../_services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {

	get topStyle(){
    let h = window.screen.height;
		return (( (h/2.5) - (this.scrollY * 0.7)) + 'px');
	}

	scrollY:number = 5;
  loading:boolean = true;

  data:any;

  constructor(private dataService:DataService, private route: ActivatedRoute) {
    route.data.subscribe(data=>{
      this.data = data.article;
    })
  }

  ngOnInit() {

  }



  @HostListener("window:scroll", []) onWindowScroll() {
// do some stuff here when the window is scrolled
	 this.scrollY = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
	}



}
