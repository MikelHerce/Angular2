"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var capi = new Avenger("Capitan America", "equipo capi", "Steve");
console.log(capi);
