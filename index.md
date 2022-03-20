# Práctica 5 - Objetos, clases e interfaces
## Ejercicio 1
En este ejercicio, las clases creadas son tres: __Pokemon__, __Pokedex__ y __Combat__:

-   La clase ```Pokemon``` sirve para almacenar un pokemon y toda su información, ademas tiene una serie de metodos que permite que otras clases ajenas a ella utilice esta información guardada por la clase:

```typescript
export class Pokemon{
    protected name: string;
    protected num: number;
    protected height: number;
    protected weight: number;
    protected type: string[] = [];
    protected HP: number;
    protected atck: number;
    protected def: number;
    protected spe: number;

    constructor(na:string,nu:number,he:number,we:number,hp:number,at:number,de:number,sp:number,t1:string,t2?:string){
        this.name = na
        this.num = nu
        this.height = he
        this. weight = we
        this.type.push(t1)
        if(t2 !== undefined){this.type.push(t2)} 
        this.HP = hp
        this.atck = at
        this.def = de
        this.spe = sp
    }

    nam():string{
        return this.name
    }

    natnum():number{
        return this.num
    }

    alt():number{
        return this.height
    }

    pes():number{
        return this.weight
    }

    tipo():string{
        let result:string = this.type[0]
        if(this.type.length == 2){
            result += ','
            result += this.type[1]
        }
        return result
    }

    ti():string{
        return this.type[0]
    }
    
    hp():number{
        return this.HP
    }

    attack():number{
        return this.atck
    }

    defense():number{
        return this.def
    }

    speed():number{
        return this.spe
    }

}
```

-   La siguiente clase de la que hablaremos es la clase ```Pokedex```, esta clase lo que hace es guardar la información de ciertos pokemon que se pasa por el constructor y los almacena, permitiendo buscarlos y que se muestre su información si se desea:

```typescript
export class Pokedex{
    private pokedex: Pokemon[] = [];

    constructor(...pokemons:Pokemon[]){
        pokemons.forEach(poke => {
            this.pokedex.push(poke)
        });
    }

    search(pokemon:string):string{
        let result: string = ""
        this.pokedex.forEach(poke => {
            if(poke.nam() == pokemon){
                return result = poke.nam() +',' +poke.alt() +',' +poke.pes() +',' +poke.tipo() +',' +poke.hp() +',' +poke.attack() +',' +poke.defense() +',' +poke.speed() 
            }
        });
        return result
    }

}
```

Esta clase utiliza la clase ```Pokemon``` descrita previamente para guardar toda la información de un pokemon y que despues esta pueda simplemente mostrarla.

-   Por ultimo la clase ```Combat``` simula un combate entre dos pokemon, utilizando sus estadisticas _(HP,Ataque,Defensa y Velocidad)_ comprueba que pokemon sera el primero en atacar, y posteriormente calcula el daño que recibe cada pokemon y cuanta salud le queda a ambos, el metodo start se detiene cuando la salud de uno de los dos pokemon llega a 0 y devuelve quien ha ganado:

```typescript
export class Combat{
    private SE:Array<Array<String>> = [["Fuego","Planta"],["Agua","Fuego"],["Planta","Agua"],["Electrico","Agua"]];
    comb1:Pokemon;
    comb2:Pokemon;

    constructor(c1:Pokemon,c2:Pokemon){
        if(c1.ti() != "Fuego" || c1.ti() != "Agua" || c1.ti() != "Planta" || c1.ti() != "Electrico"){console.error("el tipo asignado no esta disponible para el combate")}
        if(c2.ti() != "Fuego" || c2.ti() != "Agua" || c2.ti() != "Planta" || c1.ti() != "Electrico"){console.error("el tipo asignado no esta disponible para el combate")}
        this.comb1 = c1;
        this.comb2 = c2;
    }

    damageCalculator(c1:Pokemon, c2:Pokemon):number{
        let effect: number = 1
        for(let i: number = 0; i < this.SE.length; i++){
           if(c1.ti() == this.SE[i][1] && c2.ti() == this.SE[i][2]){
               effect = 2
               break
           }
           else if(c1.ti() == this.SE[i][2] && c2.ti() == this.SE[i][1]){
               effect = 0.5
               break
           }
        }
        let totaldamage: number = 50 * (c1.attack()/c2.defense()) * effect
        return totaldamage
    }

    start():string{
        let hp1:number = this.comb1.hp()
        let hp2:number = this.comb2.hp()
        let i : number = 0
        let result : string = ""
        if(this.comb1.speed() > this.comb2.speed()){
            while(hp1 > 0 || hp2 > 0){
                console.log("Turno: " + String(i))
                console.log("Vida de " + this.comb1.nam() + ": " + hp1 + ", vida de " + this.comb2.nam() + ": " + hp2)
                console.log("Ataca " + this.comb1.nam())
                let damage:number = this.damageCalculator(this.comb1,this.comb2)
                hp2 = hp2 - damage
                if(hp2 <= 0){
                    result = 'El vencedor es: ' + this.comb1.nam()
                    break
                }
                console.log("Ataca " + this.comb2.nam())
                damage = this.damageCalculator(this.comb2,this.comb1)
                hp1 = hp1 - damage
                if(hp1 <= 0){
                    result = 'El vencedor es: ' + this.comb2.nam()
                    break
                }
                i++;
            }
        }
        else if(this.comb1.speed() < this.comb2.speed()){
            while(hp1 > 0 || hp2 > 0){
                console.log("Turno: " + String(i))
                console.log("Vida de " + this.comb1.nam() + ": " + hp1 + ", vida de " + this.comb2.nam() + ": " + hp2)
                console.log("Ataca " + this.comb2.nam())
                let damage:number = this.damageCalculator(this.comb2,this.comb1)
                hp1 = hp1 - damage
                if(hp1 <= 0){
                    result = 'El vencedor es: ' + this.comb2.nam()
                    break
                }
                console.log("Ataca " + this.comb1.nam())
                damage = this.damageCalculator(this.comb1,this.comb2)
                hp2 = hp2 - damage
                if(hp2 <= 0){
                    result = 'El vencedor es: ' + this.comb1.nam()
                    break
                }
                i++;
            }
        }
        console.log(result)
        return result 
    }
    
}
```
En esta clase la efectividad se guarda en un array de superefectivos y asi se comprueba la efectividad del ataque de un pokemon a la hora de calcular el daño con el metodo ```damageCalculator()```, a este metodo ademas se le tiene que indicar cuales son los pokemon que intervienen, para moder manejar facilmente quien ataca primero en el metodo ```start()```.