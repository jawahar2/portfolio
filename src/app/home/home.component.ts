import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(){
    sessionStorage.setItem("about","false");
    sessionStorage.setItem("home","true");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
  }
}
