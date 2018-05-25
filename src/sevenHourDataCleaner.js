import React from 'react';

const sevenHourDataCleaner = (data) => {
  const sevenHourDataCleaner = []

  data.hourly_forecast.splice(1,7).forEach(forecast => {

    sevenHourDataCleaner.push({
      hour: forecast.FCTTIME.civil,
      temp: forecast.temp.english
    })
  })
  return sevenHourDataCleaner;
}
export default sevenHourDataCleaner;