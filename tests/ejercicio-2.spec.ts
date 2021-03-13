import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('Función que detecta si hay palabras concatenadas', () => {
  it('(["allow", "lowering", "ringmaster", "terror"]) returns value lowringter', () => {
    expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.be.equal('lowringter')
  });
});