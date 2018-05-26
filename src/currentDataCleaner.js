import React from 'react';

const currentDataCleaner = (data) => {
  const currentData = {
            name: data.current_observation.display_location.full, 
            conditions: data.forecast.simpleforecast.forecastday[3].conditions, 
            dayOfWeek: data.forecast.simpleforecast.forecastday[3].date.weekday, 
            currentTemperature: data.current_observation.temperature_string, 
            expectedHigh: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
            expectedLow: data.forecast.simpleforecast.forecastday[3].low.fahrenheit
      };
  return currentData;
}
export default currentDataCleaner;