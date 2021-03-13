import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('Función que calcula los movimientos que se tienen que hacer desde la posición inicial a la final', () => {
  it('(30, 50, [2, 2], [5, 3]) returns value [ "East", "East", "East", "North"]', () => {
    expect(agent(30, 50, [2, 2], [5, 3])).to.be.eql(['East', 'East', 'East', 'North'])
  });
});