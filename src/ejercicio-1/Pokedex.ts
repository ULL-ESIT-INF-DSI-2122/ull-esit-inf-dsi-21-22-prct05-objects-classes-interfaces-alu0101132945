import {Pokemon} from './Pokemon';

export class Pokedex{
    private pokedex: Pokemon[] = [];

    constructor(...pokemons:Pokemon[]){
        pokemons.forEach(poke => {
            this.pokedex.push(poke)
        });
    }

    

}