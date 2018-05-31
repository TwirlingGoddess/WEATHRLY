const sevenHourDataCleaner = (data) => {
  
  const sevenHourDataArray = []

  data.hourly_forecast.splice(1,7).forEach(forecast => {

    sevenHourDataArray.push({
      hour: forecast.FCTTIME.civil,
      image: forecast.icon_url,
      temp: forecast.temp.english
    })
  })
  return sevenHourDataArray;
}
export default sevenHourDataCleaner;