"use strict";
class Bicho {
    constructor() {
        this.raca = 'Mamifero';
        this.especie = 'Equina';
        this.quantidadeMamas = 10;
    }
    getQtdeLeite() {
        return 10;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
    display() {
        console.log(`Raca: ${this.raca}`);
        console.log(`Especies: ${this.especie}`);
        console.log(`Nº Mamas: ${this.quantidadeMamas}`);
    }
}
let bicho;
bicho = new Bicho();
bicho.barulho('pocotó pocotó');
bicho.display();
