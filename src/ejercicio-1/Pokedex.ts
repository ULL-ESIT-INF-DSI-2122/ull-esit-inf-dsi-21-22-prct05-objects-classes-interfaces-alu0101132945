import {Pokemon} from './Pokemon';

export class Pokedex{
    private pokedex: Pokemon[] = [];
    /**
     * constructor de la clase pokedex
     * @param pokemons los pokemons que se van a añadir a la clase pokedex
     */
    constructor(...pokemons:Pokemon[]){
        pokemons.forEach(poke => {
            this.pokedex.push(poke)
        });
    }

    /**
     * metodo que busca un pokemon en la pokedex
     * @param pokemon nombre del pokemon que vas a buscar en la pokedex
     * @returns cadena con toda la informacion del pokemon buscado
     */
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