import Search from './Search.js';
import { mount } from 'enzyme';
import React from 'react';
// given - setup
// and   - initial expectation (ui/state before)
// when  - some action
// then  - expectation (ui/state after)


// it exists (form with input and button)

// it takes a string

it('Search input changes as the user types', () => {
  const wrapper = mount(<Search />)
  const VALUE = 'Denver, CO'
  const mockEvent = { target: { value: VALUE } }
  
  expect(wrapper.find('input').props().value).toBe('')

  wrapper.find('input').simulate('change', mockEvent)

  expect(wrapper.find('input').props().value).toBe(VALUE)
})

it('Submit button should take city and state parameters', () => {
  const getWeatherMcok = jest.fn()
  const wrapper = mount(<Search getWeather={getWeatherMcok} />)
 


  expect(getWeatherMcok).toHaveBeenCalledWith(getWeatherMcok.props().value)
})