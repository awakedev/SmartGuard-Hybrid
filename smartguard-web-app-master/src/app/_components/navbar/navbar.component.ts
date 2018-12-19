import { Component, OnInit } from '@angular/core';
import { DataService} from "../../_services/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
