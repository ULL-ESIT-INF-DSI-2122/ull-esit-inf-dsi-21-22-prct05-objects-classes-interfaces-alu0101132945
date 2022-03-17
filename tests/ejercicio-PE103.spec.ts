import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/ejercicio-PE103';

describe('ej1 function tests', () => {
  let oneHexadecimal = new Hexadecimal(23)
  let twoHexadecimal = new Hexadecimal(15)
   it('Hexadecimal is created', () => {
     expect(oneHexadecimal).to.not.equal(null);
     expect(twoHexadecimal).to.not.equal(null);
   });
});