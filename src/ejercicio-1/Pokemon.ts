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
    protected vel: number;

    constructor(na:string,nu:number,he:number,we:number,hp:number,at:number,de:number,ve:number,t1:string,t2?:string){
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
        this.vel = ve
    }

}