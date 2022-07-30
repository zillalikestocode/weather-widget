import React from 'react'
import {TbSun, TbMoon} from 'react-icons/tb'

const Time = (props) => {

	return (
		<>
		{props.night ? <TbMoon {...props} /> : <TbSun {...props} />}
		</>
	)
}

export default Time