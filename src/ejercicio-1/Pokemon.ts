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

    constructor(na:string,nu:number,he:number,we:number,hp:number,at:number,de:number,sp:number,t1:string,t2?:string){
        this.name = na
        this.num = nu
        this.height = he
        this. weight = we
        this.type.push(t1)
        if(t2 === t1){
            this.type.push(t2)
        }
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