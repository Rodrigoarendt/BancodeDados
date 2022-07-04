interface IAnimal{
    raca: string
    especie: string
    barulho(x:string):void;
}

interface IMamifero{
    quantidadeMamas:number
    getQtdeLeite(): number
}

class Bicho implements IAnimal, IMamifero{
    raca: string = 'Mamifero'
    especie: string = 'Equina'
    quantidadeMamas: number = 10

    getQtdeLeite(): number {
        return 10
    }
    

    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }

    display(){
        console.log(`Raca: ${this.raca}`)
        console.log(`Especies: ${this.especie}`)
        console.log(`Nº Mamas: ${this.quantidadeMamas}`)
    }
    
}

let bicho: Bicho
bicho = new Bicho()
bicho.barulho('pocotó pocotó')
bicho.display()