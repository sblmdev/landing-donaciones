import { Component,AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  pantallaCargada = false;

  readonly direccion:string = 'http://localhost:4200';

  constructor(private router: Router) {}

  redirigirPagina(ruta: string) {
    this.router.navigate([ruta]);
  }

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
  abrirGoogle() {
    window.open('https://www.google.com', '_blank');
  }
  abrirPago(){
    window.location.replace(this.direccion+'/pago');
  }
}
