import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(
    private location: Location, 
    private loginService: LoginService, 
    private router: Router
  ) {}

  public currentPage: string = '';
  public isLogged: boolean = this.loginService.isLogged();

  ngOnInit(): void {
    // Subscribe to router events instead of initializing variables which depends on routes here
    // because other components may change but not header, you will need to reload the page
    this.router.events.subscribe((event) => {
      // Check if the event is of tipe navigation end, to know when you are finally on the page
      if (event instanceof NavigationEnd) {
        // Now, change or initializing variables depending on routes
        this.currentPage = this.location.path();
        this.isLogged = this.loginService.isLogged();
        this.router.navigated = false;
      }
    });
  }

}
