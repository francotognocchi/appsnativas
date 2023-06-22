import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.page.html',
  styleUrls: ['./favoritas.page.scss'],
})
export class FavoritasPage implements OnInit {

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async presentToast(position: 'top') {
    const toast = await this.toastCtrl.create({
      message: "La prenda ha sido eliminada de favoritos",
      duration: 1000,
      position: position
    })
    await toast.present();
    this.router.navigate(['/inicio'])
  }

}
