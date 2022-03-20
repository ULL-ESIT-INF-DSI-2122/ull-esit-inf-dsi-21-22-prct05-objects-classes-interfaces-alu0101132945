//La clase pokemon contendra todos los atributos de un pokemon mientras que la pokedex los leera y los mostrara por pantalla
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

    /**
     * constructor de la clase Pokemon
     * @param na nombre del pokemon
     * @param nu numero de la pokedex nacional
     * @param he altura del pokemon
     * @param we peso del pokemon
     * @param hp vida del pokemon
     * @param at ataque del pokemon
     * @param de defensa del pokemon
     * @param sp velocidad del pokemon
     * @param t1 tipo del pokemon
     * @param t2 si el pokemon tiene otro tipo, este es el parametro donde se guarda
     */
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

    /**
     * metodo que devuelve el nombre del pokemon
     * @returns el nombre del pokemon en una cadena
     */
    nam():string{
        return this.name
    }

    /**
     * metodo que devuelve el numero del pokemon
     * @returns el numero del pokemon en la pokedex nacional
     */
    natnum():number{
        return this.num
    }

    /**
     * metodo que devuelve la altura del pokemon
     * @returns el valor de la altura de un pokemon
     */
    alt():number{
        return this.height
    }

    /**
     * metodo que devuelve el peso del pokemon
     * @returns el valor del peso
     */
    pes():number{
        return this.weight
    }
    /**
     * metodo que devuelve los tipos del pokemon
     * @returns devuelve una cadena con el tipo(o tipos) del pokemon
     */
    tipo():string{
        let result:string = this.type[0]
        if(this.type.length == 2){
            result += ','
            result += this.type[1]
        }
        return result
    }

    /**
     * este metodo hace lo mismo que el anterior pero solo devuelve el primer tipo del pokemon, para la clase combate
     * @returns el primer tipo del pokemon
     */
    ti():string{
        return this.type[0]
    }
    /**
     * este metodo devuelve la vida del pokemon
     * @returns el valor de vida del pokemon
     */
    hp():number{
        return this.HP
    }

    /**
     * este metodo devuelve el ataque del pokemon
     * @returns el valor de ataque del pokemon
     */
    attack():number{
        return this.atck
    }

    /**
     * este metodo devuelve la defensa del pokemon
     * @returns el valor de la defensa del pokemon
     */
    defense():number{
        return this.def
    }

    /**
     * este metodo devuelve la velocidad del pokemon
     * @returns el valor de la vvelocidad del pokemon
     */
    speed():number{
        return this.spe
    }

}