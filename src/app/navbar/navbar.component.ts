import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public showHideNavigationMobile = false;

  public showHideHome = false;
  public showHidePages = false;
  public showService = false;
  public showDoctor = false;
  public showBlog = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  public toggleNavigationMobile() {
    this.showHideNavigationMobile = !this.showHideNavigationMobile;
  }

  // tslint:disable-next-line: typedef
  public toggleHomeOption() {
    this.showHideHome = !this.showHideHome;
  }

  // tslint:disable-next-line: typedef
  public togglePages() {
    this.showHidePages = !this.showHidePages;
  }

  // tslint:disable-next-line: typedef
  public toggleService() {
    this.showService = !this.showService;
  }

  // tslint:disable-next-line: typedef
  public toggleDoctor() {
    this.showDoctor = !this.showDoctor;
  }

  // tslint:disable-next-line: typedef
  public toggleBlog() {
    this.showBlog = !this.showBlog;
  }
}
