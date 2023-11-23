import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['/home'])
  }
  goCarrito(){
    this.router.navigate(['/carrito']);
  }


}
