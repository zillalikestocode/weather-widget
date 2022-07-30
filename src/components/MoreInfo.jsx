import React from 'react'
import Forecasts from './Forecasts'
import {WiBarometer} from 'react-icons/wi'
import {BsMoisture} from 'react-icons/bs'
import {motion} from 'framer-motion'

const MoreInfo = ({data, setMoreinfo, night}) => {
	const variants = {
		initial: {
			height: '200px'
		},
		open: {
			height: 'auto'
		}
	}
	return (
		<motion.div variants={variants} initial="initial" animate="open" >
			<div className="text-base font-light">
				<h4 className="flex items-center gap-2"><BsMoisture fontSize='20'/>Humidity: {data.main.humidity}%</h4>
				<h4 className="flex items-center gap-2"><WiBarometer fontSize='20'/>Pressure: {data.main.pressure}hPa</h4>
			</div>
			<button className={`text-base p-3 ${night ? 'bg-indigo-700' : 'bg-blue-700'} mt-3 rounded-lg`} onClick={() => setMoreinfo(false)}>Go Back</button>
		</motion.div>
	)
}

export default MoreInfo