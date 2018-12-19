import { Component, OnInit, HostListener } from '@angular/core';
import { DataService} from "../../_services/data.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

	get topStyle(){
		return (( 700 - (this.scrollY * 0.7)) + 'px');
	}

	scrollY:number = 5;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.loadArticles(1);
  }

  nextPage(){
    let nextPage = this.data.store.currentArticlePage.currentPage;
    nextPage++;
    this.data.loadArticles(nextPage);
  }

  prevPage(){
    let nextPage = this.data.store.currentArticlePage.currentPage;
    nextPage--;
    this.data.loadArticles(nextPage);
  }

  @HostListener("window:scroll", []) onWindowScroll() {
// do some stuff here when the window is scrolled
	 this.scrollY = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
	}

}
