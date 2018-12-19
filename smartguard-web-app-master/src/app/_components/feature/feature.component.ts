import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() cover:string;
  @Input() detail:string;

    _showFeature:boolean = false;

  showFeature(){
  	this._showFeature = true;
  }

  hideFeature(){
  	this._showFeature = false;
  }

}
