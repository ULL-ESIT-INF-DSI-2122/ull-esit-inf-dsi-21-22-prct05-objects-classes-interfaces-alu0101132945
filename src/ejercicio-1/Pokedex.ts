import {Pokemon} from './Pokemon';

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