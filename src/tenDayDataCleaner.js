const tenDayDataCleaner = (data) => {
  const tenDayArray = []

  data.forecast.simpleforecast.forecastday.forEach(forecast => {
    tenDayArray.push({
      
      dayOfWeek: forecast.date.weekday,
      image: forecast.icon_url,
      high: forecast.high.fahrenheit ,
      low: forecast.low.fahrenheit
    })
  })
  return tenDayArray;
}
export default tenDayDataCleaner;