import { Injectable } from '@angular/core';
//import { Prenda } from './Prenda.model';

@Injectable({
  providedIn: 'root'
})

export class PrendasService {

  prendas = [    
  
  ]

  constructor() { }

  leerPrendas() {
    return [...this.prendas]
  }

  getPrenda(placeId: string) {
    return {
      ...this.prendas.find(prenda => {
        return prenda.id === placeId
      })
    }
  }

  async registrar (prenda) {
    const res = await fetch("http://localhost:8080/prenda", {method: "POST", body:JSON.stringify(prenda), headers: {'Content-Type': 'application/json'}})
        const resjson = (await res).json()
        return resjson
    }

}
