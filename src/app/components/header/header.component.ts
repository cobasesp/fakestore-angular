import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(private location: Location) { }

  public currentPage: string = '';

  ngOnInit(): void {
    this.currentPage = this.location.path();
    console.log(this.currentPage)
  }

}
