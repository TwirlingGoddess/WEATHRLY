import React from 'react';
import { shallow } from 'enzyme';
import TenDayForecast from './TenDayForecast.js';
import Card from './Card.js'

describe('TenDayForecast renders data', () => {

  test('Should render TenDayForecast cards when passed data', () => {

    const tenDayForecast = [
      {
        dayOfWeek: "Wednesday",
        high: "81",
        low: "56"
      },
      {
        dayOfWeek: "Thursday",
        high: "90",
        low: "58"
      }
    ]
    const Day = shallow(<TenDayForecast forecast={tenDayForecast} />);
    
    const actual = Day.find(Card).length
    expect(actual).toBe(2);
  })
});
