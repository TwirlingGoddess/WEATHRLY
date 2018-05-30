import React from 'react';
import { shallow } from 'enzyme';
import SevenHourForecast from './SevenHourForecast.js';
import Card from './Card.js'


describe('TenDayForecast renders data', () => {

  test('Should render TenDayForecast cards when passed data', () => {

    const sevenHourForecast = [
      {
        hour: "1:00 PM",
        temp: "78.8"
      },
      {
        hour: "5:00 PM",
        temp: "90"
      }
    ]
    const Hour = shallow(<SevenHourForecast forecast={sevenHourForecast} />);
    const actual = Hour.find(Card).length
    expect(actual).toBe(2);
  })
});