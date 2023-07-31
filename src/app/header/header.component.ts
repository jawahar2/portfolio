import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isTrue: boolean=true;
  
  click(){
    console.log(sessionStorage.getItem("home"),"hello from header")
  }
}
