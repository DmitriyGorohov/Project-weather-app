import React from 'react'
import { Day } from './components/Day/Day'
import { DayInfo } from './components/DayInfo/DayInfo'
import s from './Home.module.scss'

interface Props {

}

export const Home = (props: Props) => {
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<Day />
				<DayInfo />
			</div>
		</div>
	)
}
