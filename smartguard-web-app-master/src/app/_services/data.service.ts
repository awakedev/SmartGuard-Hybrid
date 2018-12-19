import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { FacebookService } from 'ngx-facebook';
import { environment } from "../../environments/environment";

var initState:any = {
    currentArticlePage : {
      loaded: false,
      articles: [],
      currentPage: 1,
      totalPages: null,
      nextPage: null,
      prevPage:null
    },
    authed: false
  }

@Injectable()
export class DataService {

	store:any = initState;

  api:string;
  _currentArticle:BehaviorSubject<any> = new BehaviorSubject<any>(initState.currentArticle);
  _currentArticlePage:BehaviorSubject<any> = new BehaviorSubject<any>(initState.currentArticlePage);
  _authed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private fb: FacebookService) {
    this.api = environment.api;
  }

  setCurrentArticlePage(data,loaded){
    this.store.currentArticlePage = {
      loaded: loaded,
      articles: data.articles,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      nextPage: data.nextPage,
      prevPage: data.prevPage
    }
    this._currentArticlePage.next(this.store.currentArticlePage);
  }



  loadArticle(id){
    let url = this.api + "/articles/" + id;
    //alert("Loading article " + id);
    return this.http.get(url);
  }

  loadArticles(page){
    this.setCurrentArticlePage({

    },false);
    return new Promise((done,error)=>{
      let url = this.api + "/articles?page=" + page;
    	this.http.get(url).subscribe(res=>{
    		this.setCurrentArticlePage(res,true);
        done();
    	},err=>{
        error(err);
      });
    });
  }

  get currentArticlePage(){
  	return this._currentArticlePage.asObservable();
  }

  get authed(){
    return this._authed.asObservable();
  }

  setAuthed(status:boolean){
    this.store.authed = status;
    this._authed.next(this.store.authed);
  }


}
