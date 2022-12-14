import { useState, useEffect } from 'react'
import WeatherApp from './components/WeatherApp'
import SwitchLocation from './components/SwitchLocation'

const App = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([])
  const [moreinfo, setMoreinfo] = useState(false)

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
      {(typeof data.main != 'undefined') ? <WeatherApp setMoreinfo={setMoreinfo} moreinfo={moreinfo} weatherData={data}/> : <SwitchLocation />}
      <h4 className="pt-10 text-xl text-center font-semibold credits">Created by <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Emmanuel Ngoka</span></h4>
    </div>
 )}

export default App
