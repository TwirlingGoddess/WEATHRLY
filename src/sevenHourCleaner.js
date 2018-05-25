import React from 'react';

const sevenHourCleaner = (data) => {
  const sevenHourArray = []

  data.forecast.simpleforecast.forecastday.forEach(forecast => {
    sevenHourArray.push({
      dayOfWeek: forecast.date.weekday,
      high: forecast.high.fahrenheit ,
      low: forecast.low.fahrenheit
    })
  })
  return sevenHourArray;
}
export default sevenHourCleaner;