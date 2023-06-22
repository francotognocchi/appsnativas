import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrendasService } from '../prendas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addprenda',
  templateUrl: './addprenda.page.html',
  styleUrls: ['./addprenda.page.scss'],
})
export class AddprendaPage implements OnInit {
  form: FormGroup;

  constructor(private prendaservice: PrendasService, private router: Router, private formBuilder: FormBuilder, public alertController: AlertController) { 
    this.form = this.formBuilder.group ({
      'title': new FormControl("",Validators.required),
      'imageURL': new FormControl("", [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      'subtitle': new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'description': new FormControl("", Validators.required),
    });
  }

  ngOnInit() { 
  }

  async saveNewPrenda() {
    console.warn(this.form.value)
    let f = this.form.value;

    let prenda = {
      titulo: f.title,
      categoria: f.subtitle,
      imagen: f.imageURL,
      cuerpo: f.description
    }

    localStorage.setItem('prenda',JSON.stringify(prenda));

    this.prendaservice.registrar(prenda);

    const alert = await this.alertController.create({
      header: "ENVIADA",
      message: "La prenda ha sido agregada con exito!",
      buttons: ["OK"]
    })
    await alert.present();
    this.router.navigate(['/inicio'])

  }
  getsubtitleMessage(){
    if(this.form.controls.subtitle.hasError('requiered')){
      return 'Este campo es requerido'
}
if(this.form.controls.subtitle.hasError('pattern')){
  return 'Solo se permiten letras.'
}
}
getimageURLMessage(){
  if(this.form.controls.imageURL.hasError('requiered')){
    return 'Este campo es requerido'
}
if(this.form.controls.imageURL.hasError('pattern')){
return 'Solo se permiten links a imágenes.'
}
}
}

