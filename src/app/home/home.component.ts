import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {}
  ngOnInit(){
    sessionStorage.setItem("about","false");
    sessionStorage.setItem("home","true");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
  }
  goTo(){
    sessionStorage.setItem("about","true");
    sessionStorage.setItem("home","false");
  }
}
