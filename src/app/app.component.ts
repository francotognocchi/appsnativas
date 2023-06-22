import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Agregar prenda', url: './inicio/addprenda', icon: 'add' },
    { title: 'Tus prendas favoritas', url: './favoritas', icon: 'heart' }
  ];
  constructor() {}
}


