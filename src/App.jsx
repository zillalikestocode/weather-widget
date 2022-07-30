import { useState, useEffect } from 'react'
import WeatherApp from './components/WeatherApp'

const App = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
  	async function fetchData() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude)
      });
  		await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=f342b92a5c51b7474e415416eea1c689`)
  		.then(res => res.json())
  		.then(result => {
  			setData(result);
  			console.log(result)
  		})
  	}
  	fetchData()
  }, [lat, lon])

  return (
   <div>
      {(typeof data.main != 'undefined') && <WeatherApp weatherData={data}/>}
    </div>
 )}

export default App
