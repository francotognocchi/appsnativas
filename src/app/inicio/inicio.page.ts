import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrendasService } from './prendas.service';
import { PrendaService } from './prenda.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toastCtrl: ToastController, private prendasService: PrendasService, private router: Router, private prendaservice: PrendaService, private alertController: AlertController) { }


  prendas = [this.getPrendas()]
  todasLasprendas = []
  private idPrenda = null;

  ngOnInit() {
    this.getPrendas()
  }

  addNewPrenda(){
    this.router.navigate(['/new-prenda']);
  }
  
  async presentToast(position: 'top') {
    const toast = await this.toastCtrl.create({
      message: "La prenda ha sido agregada a favoritos",
      duration: 1000,
      position: position
    })
    await toast.present();
  }

  async getPrendas() {
    this.prendas = await this.prendaservice.getPrendas()
    console.table(this.prendas);
    this.todasLasprendas = Array.from(this.prendas)
  }

  async elimPrenda() {
    const alert = await this.alertController.create({
      header: "Seguro que desea eliminar esta prenda?",
      message: "Una vez que confirme esta acción, la prenda se borrará de forma permanente.",
      buttons: ["Cancelar","ELIMINAR"]
    })
    await alert.present();
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getPrendas();
      event.target.complete();
    }, 2000);
  };

}
