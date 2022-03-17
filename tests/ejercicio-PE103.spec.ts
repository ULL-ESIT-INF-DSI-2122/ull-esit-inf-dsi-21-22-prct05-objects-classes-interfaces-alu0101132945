import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/ejercicio-PE103';

describe('ej-PE103 class tests', () => {
  let oneHexadecimal = new Hexadecimal(23)
  let twoHexadecimal = new Hexadecimal(15)
  let testHexadecimal = new Hexadecimal(38)
   it('Hexadecimal is created', () => {
     expect(oneHexadecimal).to.not.equal(null);
     expect(twoHexadecimal).to.not.equal(null);
   });
   it('toString() works', () => {
    expect(testHexadecimal.toString()).to.be.equal('0x26');
  });
  it('valueOf() works', () => {
    expect(testHexadecimal.valueOf()).to.be.equal(38);
  });
});