import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card renders data', () => {

  test('Should render sevenHour card when passed data', () => {
    const card = shallow(<Card hour={13} temp={78}/>);

    const expectedHour = '13';
    const expectedTemp = '78°';

    const acutalHour = card.find('h1').text();
    const actualTemp = card.find('h2').text();
    
    expect(expectedHour).toBe(acutalHour);
    expect(expectedTemp).toBe(actualTemp);
  });

  test('Should render tenDay card when passed data', () => {
    const card = shallow(<Card day={'wednesday'} high={115} low={15}/>);

    const expectedDay = 'wednesday';
    const expectedHigh = 'High 115°';
    const expectedLow = 'Low 15°';

    const actualDay = card.find('h1').text();
    const actualHigh = card.find('h2').text();
    const actualLow = card.find('h3').text();

    expect(expectedDay).toBe(actualDay);
    expect(expectedHigh).toBe(actualHigh);
    expect(expectedLow).toBe(actualLow);
  })
})