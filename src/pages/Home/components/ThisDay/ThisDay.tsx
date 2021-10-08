import React from 'react'
import { Card } from './Card'
import { Tabs } from './Tabs'
import s from './ThisDay.module.scss'

interface Props { }

export interface Day {
	day: string
	day_info: string
	icon_id: string
	temp_day: string
	temp_night: string
	info: string
}

export const ThisDay = (props: Props) => {
	const days: Day[] = [
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Завтра',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь и солнце',
		},
		{
			day: 'Ср',
			day_info: '30 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь',
		},
		{
			day: 'Чт',
			day_info: '28 авг',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Пт',
			day_info: '28 авг',
			icon_id: 'rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Сб',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Вс',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
	]

	return (
		<React.Fragment>
			<Tabs />
			<div className={s.this_day}>
				{days.map((day: Day, index: number) => (
					<Card key={`${day.day}__${index}`} day={day} />
				))}
			</div>
		</React.Fragment>

	)
}
