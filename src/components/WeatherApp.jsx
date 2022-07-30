import React from 'react'
import WeatherInfo from './WeatherInfo'
import {TbMapPin } from 'react-icons/tb'
import Time from './Time'
import MoreInfo from './MoreInfo'
import { motion, AnimatePresence } from 'framer-motion'

const WeatherApp = ({weatherData, moreinfo, setMoreinfo}) => {
	const date = new Date;
	const day = date.toLocaleString('default', {weekday: 'long'})
	const month = date.toLocaleString('default', {weekday: 'short'})
	const hour = date.getHours()
	const night = (hour >= 18 || hour < 6) ? true : false
	const theme = night ? 'weather-dark' : 'weather-light'
	const variants = {
		initial: {
			height: '100px',
		},
		open: {
			height: 'auto',
			overflow: 'hidden',
			transition: {
				duration: 0.2,
			}
		},
		exit: {
			height: 0
		}
	}

	return (
		<div className={`${!moreinfo && theme} weather text-white p-3 m-auto mt-24 w-56 rounded-xl ${moreinfo && '!bg-[#121212]'} `}>
			{!moreinfo ? <motion.div variants={variants} initial="initial" animate="open" exit="exit" ><div className="relative">
							<h4 className="w-fit font-bold text-lg">{day}</h4>
							<p className="w-fit text-sm font-light">{`${date.getDay()} ${month} ${date.getFullYear()}`}</p>
							<p className=" w-fit text-sm font-light flex items-center gap-1"><TbMapPin /> {`${weatherData.name}, ${weatherData.sys.country}`}</p>
							<div className="absolute top-2 right-0">
								<Time fontSize="30" night={night}/>
							</div>
						</div>
						<WeatherInfo moreinfo={moreinfo} setMoreinfo={setMoreinfo} data={weatherData} night={night}/></motion.div> : <MoreInfo data={weatherData} night={night} setMoreinfo={setMoreinfo} />}
		</div>
	)
}

export default WeatherApp