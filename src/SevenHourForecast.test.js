import { expect } from 'chai';
import SevenHourForecast from './SevenHourForecast.js';


describe('SevenHourForecast', function () {
  let sevenHourForecast;
  // setup
  // execute
  // expect

  beforeEach(() => {
    sevenHourForecast = new SevenHourForecast();
  });

  it('should take a single argument of props', () => {
    expect(.......).toBe(........)
  })

  it('should iterate over the array of data ?', () => {
    expect(.......).toBe(........)
  })

  it('should return a single element in each card component', () => {
    expect(sevenHourForecast.children.length).toBe(1)
  }); 

  it('should return seven card components', () => {
    expect(card.length).toBe(7)
  }); 
})