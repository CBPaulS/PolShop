import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['/home'])
  }
  goPerfil(){
    this.router.navigate(['/perfil'])
  }

}
