import { expect } from 'chai';
import TenDayForecast from './TenDayForecast.js';


describe('TenDayForecast', function () {
  let tenDayForecast;
  // setup
  // execute
  // expect

  beforeEach(() => {
    tenDayForecast = new TenDayForecast();
  });

  it('should take a single argument of props', () => {
    expect(.......).toBe(........)
  })

  it('should iterate over the array of data ?', () => {
    expect(.......).toBe(........)
  })

  it('should return a single element in each card component', () => {
    expect(tenDayForecast.children.length).toBe(1)
  }); 

  it('should return ten card components', () => {
    expect(card.length).toBe(10)
  }); 
})