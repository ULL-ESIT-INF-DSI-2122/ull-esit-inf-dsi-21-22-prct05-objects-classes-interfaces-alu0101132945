import { Pokemon } from "./Pokemon"

export class Combat{
    private SE:Array<Array<String>> = [["Fuego","Planta"],["Agua","Fuego"],["Planta","Agua"],["Electrico","Agua"]];
    comb1:Pokemon;
    comb2:Pokemon;

    /**
     * constructor de la clase combate
     * @param c1 el primer pokemon combatiente, este parametro es de la clase pokemon
     * @param c2 el segundo pokemon combatiente, este parametro es de la clase pokemon
     */
    constructor(c1:Pokemon,c2:Pokemon){
        if(c1.ti() != "Fuego" || c1.ti() != "Agua" || c1.ti() != "Planta" || c1.ti() != "Electrico"){console.error("el tipo asignado no esta disponible para el combate")}
        if(c2.ti() != "Fuego" || c2.ti() != "Agua" || c2.ti() != "Planta" || c1.ti() != "Electrico"){console.error("el tipo asignado no esta disponible para el combate")}
        this.comb1 = c1;
        this.comb2 = c2;
    }

    /**
     * metodo que calcula el daño que hace un pokemon
     * @param c1 el pokemon atacante
     * @param c2 el pokemon que recibe el daño
     * @returns devuelve el daño recibido por el pokemon c2
     */
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

    /**
     * inicia un combate pokemon entre los dos pokemon guardados en los atributos
     * @returns devuelve el ganador del combate en una cadena
     */
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