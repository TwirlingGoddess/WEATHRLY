import { expect } from 'chai';
import Card from './Card.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';


describe('Card', function () {
  let card;
  // setup
  // execute
  // expect

  it('should return a single element in this component', () => {
    card = new Card();
    expect(card.length).toBe(1)
  });
})