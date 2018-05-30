import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App unit tests', () => {
  global.localStorage = {}

  let renderedApp;
  beforeEach(() => renderedApp = shallow(<App />, { disableLifecycleMethods: true }));

  describe('App default state', () => {
    test('App has a default state of tenDayForecast', () => {

      const expectedState = [];
      const actualState = renderedApp.state('tenDayForecast');
      
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('App default state', () => {
    test('App has a default state of sevenHourForecast', () => {

      const expectedState = [];
      const actualState = renderedApp.state('sevenHourForecast');

      expect(actualState).toEqual(expectedState);
    });
  });

  describe('App default state', () => {
    test('App has a default state of currentWeather', () => {

      const expectedState = [];
      const actualState = renderedApp.state('currentWeather');

      expect(actualState).toEqual(expectedState);
    });
  });
});