import React from 'react'
import WeatherInfo from './WeatherInfo'
import {TbMapPin } from 'react-icons/tb'
import Time from './Time'

const WeatherApp = ({weatherData}) => {
	const date = new Date;
	const day = date.toLocaleString('default', {weekday: 'long'})
	const month = date.toLocaleString('default', {weekday: 'short'})
	const hour = date.getHours()
	const night = (hour >= 18 || hour < 6) ? true : false
	const theme = night ? 'weather-dark' : 'weather-light'
	

	return (
		<div className={`${theme} text-white p-3 m-auto mt-24 w-56 rounded-xl`}>
			<div className="relative">
				<h4 className="w-fit font-bold text-lg">{day}</h4>
				<p className="w-fit text-sm font-light">{`${date.getDay()} ${month} ${date.getFullYear()}`}</p>
				<p className=" w-fit text-sm font-light flex items-center gap-1"><TbMapPin /> {`${weatherData.name}, ${weatherData.sys.country}`}</p>
				<div className="absolute top-2 right-0">
					<Time fontSize="30" night={night}/>
				</div>
			</div>
			<WeatherInfo data={weatherData} night={night}/>
		</div>
	)
}

export default WeatherApp