const currentDataCleaner = (data) => {
  const currentData = {
            name: data.current_observation.display_location.full, 
            conditions: data.forecast.simpleforecast.forecastday[0].conditions, 
            dayOfWeek: data.forecast.simpleforecast.forecastday[0].date.weekday, 
            currentTemperature: data.current_observation.temperature_string, 
            expectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            expectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit
      };
  return currentData;
}
export default currentDataCleaner;