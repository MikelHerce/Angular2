


class Avenger {

  nombre:string;
  equipo:string;
  nombreReal:string;

  puedePelear:boolean=false;
  peleasGanadas:number=0;

  constructor(nombre:string, equipo:string, nombreReal:string){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombreReal=nombreReal;
  }
}

let capi:Avenger = new Avenger("Capitan America","equipo capi","Steve");

console.log(capi);
