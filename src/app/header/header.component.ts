import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHome!: boolean;
  isAbout!: boolean;
  isPortfolio!: boolean;
  isReach!: boolean;

  ngOnInit(){
    if(sessionStorage.getItem("home") == "true"){
      this.isHome=true;
    }
    else{
      this.isHome=false;
    }
    if(sessionStorage.getItem("about") == "true"){
      this.isAbout=true;
    }
    else{
      this.isAbout=false;
    }
    if(sessionStorage.getItem("portfolio") == "true"){
      this.isPortfolio=true;
    }
    else{
      this.isPortfolio=false;
    }
    if(sessionStorage.getItem("reach") == "true"){
      this.isReach=true;
    }
    else{
      this.isReach=false;
    }
  }
  
  click(){
    // location.reload();
    if(sessionStorage.getItem("home") == "true"){
      this.isHome=true;
    }
    else{
      this.isHome=false;
    }
    if(sessionStorage.getItem("about") == "true"){
      this.isAbout=true;
    }
    else{
      this.isAbout=false;
    }
    if(sessionStorage.getItem("portfolio") == "true"){
      this.isPortfolio=true;
    }
    else{
      this.isPortfolio=false;
    }
    if(sessionStorage.getItem("reach") == "true"){
      this.isReach=true;
    }
    else{
      this.isReach=false;
    }
  }
  clickHome(){
    this.isHome = true;
    this.isAbout = false;
    this.isPortfolio = false;
    this.isReach = false;
    sessionStorage.setItem("home","true");
    sessionStorage.setItem("about","false");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
  }
  clickAbout(){
    this.isHome = false;
    this.isAbout = true;
    this.isPortfolio = false;
    this.isReach = false;
    sessionStorage.setItem("home","false");
    sessionStorage.setItem("about","true");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
  }
  clickPortfolio(){
    this.isHome = false;
    this.isAbout = false;
    this.isPortfolio = true;
    this.isReach = false;
    sessionStorage.setItem("home","false");
    sessionStorage.setItem("about","false");
    sessionStorage.setItem("portfolio","true");
    sessionStorage.setItem("reach","false");
  }
}