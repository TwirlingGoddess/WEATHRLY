const sevenHourDataCleaner = (data) => {
  console.log(data);
  
  const sevenHourDataArray = []

  data.hourly_forecast.splice(1,7).forEach(forecast => {

    sevenHourDataArray.push({
      hour: forecast.FCTTIME.civil,
      temp: forecast.temp.english
    })
  })
  return sevenHourDataArray;
}
export default sevenHourDataCleaner;