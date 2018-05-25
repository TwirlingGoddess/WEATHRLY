import React from 'react';
// import App from './App';

const tenDayCleaner = (data) => {
  const tenDayArray = []

  data.forecast.simpleforecast.forecastday.forEach(forecast => {
    tenDayArray.push({
      dayOfWeek: forecast.date.weekday,
      high: forecast.high.fahrenheit ,
      low: forecast.low.fahrenheit
    })
  })
  return tenDayArray;
}
export default tenDayCleaner;