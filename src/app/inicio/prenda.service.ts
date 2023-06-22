import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class PrendaService {

    constructor() { }

    async getPrendas() {
        const res = await fetch("http://localhost:8080/prenda")
        const resjson = (await res).json()
        return resjson
    }


}


