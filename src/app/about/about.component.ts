import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  ngOnInit(){
    sessionStorage.setItem("about","true");
    sessionStorage.setItem("home","false");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
    // location.reload();
  }
}
