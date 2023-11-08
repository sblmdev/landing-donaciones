import { Component,AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pantallaCargada = false;
  
ngOnInit(){
  console.log(this.pantallaCargada)
}


  mostrar():void{
    this.pantallaCargada = true
    console.log("mostrando " + this.pantallaCargada)
  }
  title = 'landing-donaciones';
  item = 2;
  activateTab(tabId: number) :void{
    //if(tabId==1)return;
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
