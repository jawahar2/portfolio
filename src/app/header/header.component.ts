import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHome: boolean = false;
  isAbout: boolean = false;
  isPortfolio: boolean = false;
  isReach: boolean =  false;
  
  
  clickHome(){
    this.isHome = true;
    this.isAbout = false;
    this.isPortfolio = false;
    this.isReach = false;
  }
  clickAbout(){
    this.isHome = false;
    this.isAbout = true;
    this.isPortfolio = false;
    this.isReach = false;
  }
  clickPortfolio(){
    this.isHome = false;
    this.isAbout = false;
    this.isPortfolio = true;
    this.isReach = false;
  }
  clickReach(){
    this.isHome = false;
    this.isAbout = false;
    this.isPortfolio = false;
    this.isReach = true;
  }
}