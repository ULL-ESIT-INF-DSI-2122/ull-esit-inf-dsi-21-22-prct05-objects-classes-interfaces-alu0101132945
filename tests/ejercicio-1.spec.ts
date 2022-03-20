import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Pokedex} from '../src/ejercicio-1/Pokedex';
import {Combat} from '../src/ejercicio-1/Combat';

describe('ej-1 classes tests', () => {
  let Venusaur: Pokemon = new Pokemon("Venusaur",3,2,100,80,82,83,80,"Planta","Veneno")
  let Blastoise: Pokemon = new Pokemon("Blastoise",9,1.6,85.5,79,83,100,78,"Agua")
  let Pokedex1: Pokedex = new Pokedex(Venusaur,Blastoise)
  let Combat1: Combat = new Combat(Venusaur,Blastoise)
  it('Pokedex is created', () => {
    expect(Venusaur).to.not.equal(null);
    expect(Pokedex1).to.not.equal(null);
  });

  it('Pokedex search works', () => {
    expect(Pokedex1.search("Venusaur")).to.be.equal("Venusaur,2,100,Planta,Veneno,80,82,83,80");
  });

  it('Combat is created', () => {
    expect(Combat1).to.not.equal(null);
  });

  it('start is working', () => {
    expect(Combat1.start()).to.not.equal(null);
  });
  // it('Pokedex add works', () => {
  //   let Pidgeot: Pokemon = new Pokemon("Pidgeot",1.5,39.5,83,80,75,101,"Normal","Volador")
  //   expect(Pokedex1.add(Pidgeot).show).to.be.equal(null);
  // });
});