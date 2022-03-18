import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/pokemon';
import {Pokedex} from '../src/ejercicio1/pokedex';
//import {Combat} from '../src/ejercicio1/combat';

describe('ej-1 classes tests', () => {
  let Venusaur: Pokemon = new Pokemon("Venusaur",3,2,100,80,82,83,80,"Planta","Veneno")
  let Blastoise: Pokemon = new Pokemon("Blastoise",9,1.6,85.5,79,83,100,78,"Agua")
  let Pokedex1: Pokedex = new Pokedex([Venusaur,Blastoise])
  it('Hexadecimal is created', () => {
    expect(Venusaur).to.not.equal(null);
    expect(Pokedex1).to.not.equal(null);
  });
});