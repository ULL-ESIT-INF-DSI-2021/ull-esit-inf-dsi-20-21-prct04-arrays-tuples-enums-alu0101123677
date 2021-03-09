import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('funcion que calcula el valor una resistencia segun sus colores', () => {
  it('decodeResistor("marrón-negro") returns value 10', () => {
    expect(decodeResistor('marrón-negro')).to.be.equal(10)
  });
});