import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather.js';

describe('CurrentWeather renders data', () => {

  test('should render currentWeather card when passed data', () => {
    const forecastObj = {
      conditions: "Partly Cloudy",
      currentTemperature: "78.4",
      dayOfWeek: "Wednesday",
      expectedHigh: "81",
      expectedLow: "56",
      name: "Denver, CO"
    }

    const current = shallow(<CurrentWeather forecast={forecastObj}/>)
      
    const expectedCity = 'Denver, CO';
    const expectedCurrent = '78.4°'
    const expectedConditions = 'Partly Cloudy';
    const expectedDay = 'Wednesday';
    const expectedHigh = 'High 81°';
    const expectedLow = 'Low 56°';

    const actualCity = current.find('.city').text();
    const actualConditions = current.find('.conditions').text();
    const actualDay = current.find('.day').text();
    const actualCurrent = current.find('.current').text();
    const actualHigh = current.find('.high').text();
    const actualLow = current.find('.low').text();

    expect(expectedCity).toBe(actualCity);
    expect(expectedConditions).toBe(actualConditions);
    expect(expectedDay).toBe(actualDay);
    expect(expectedCurrent).toBe(actualCurrent);
    expect(expectedHigh).toBe(actualHigh);
    expect(expectedLow).toBe(actualLow);
  })
})