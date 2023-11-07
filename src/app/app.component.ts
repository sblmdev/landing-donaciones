import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-donaciones';
  item = 1;
  activateTab(tabId: number) {
    console.log(tabId);
    this.item = tabId;
    console.log(this.item)
  }
  bajar():void{
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollDistance = documentHeight - windowHeight;
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth', 
    });
  }
}
