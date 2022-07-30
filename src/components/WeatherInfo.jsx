import React from 'react'

const WeatherInfo = ({data, night}) => {
	return (
		<div className="mt-7 ">
			<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
			<h4 className="font-bold text-3xl">{Math.floor(data.main.temp)}&deg;C</h4>
			<p className="font-medium text-sm">{data.weather[0].main}</p>
			<button className={`text-base p-3 ${night ? 'bg-indigo-700' : 'bg-blue-700'} mt-3 rounded-lg`}>More info</button>
		</div>
	)
}

export default WeatherInfo