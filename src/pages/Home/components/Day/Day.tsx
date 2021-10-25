import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import s from './Day.module.scss'

interface Props {
	weather: Weather
}

export const Day = ({ weather }: Props) => {
	console.log(weather);

	return (
		<div className={s.day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.temp}>{Math.floor(weather.main.temp)}&deg;</div>
					<div className={s.day_name}>Сегодня</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={s.bottom__block}>
				<div className={s.time}>
					Время: <span>21:55</span>
				</div>
				<div className={s.city}>
					Город: <span>{weather.name}</span>
				</div>
			</div>
		</div>
	)
}
