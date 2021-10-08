import React from 'react'
import s from './DayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { DayItem } from './DayItem'

interface Props { }

export interface ITem {
	icon_id: string
	name: string
	value: string
}

export const DayInfo = (props: Props) => {
	const items = [
		{ icon_id: 'temp', name: 'Температура', value: '20° - ощущается как 17°' },
		{ icon_id: 'pressure', name: 'Давление ', value: '765 мм ртутного столба - нормальное' },
		{ icon_id: 'precipitation', name: 'Осадки', value: 'Без осадков' },
		{ icon_id: 'wind', name: 'Ветер', value: '3 м/с юго-запад - легкий ветер' },
	]

	return (
		<div className={s.day__info}>
			<div className={s.day__info_items}>
				{items.map((item: ITem, index: number) => (
					<DayItem key={`${item.name}_${index}`} item={item} />
				))}
			</div>
			<img className={s.cloud_img} src={cloud} alt='Clouds' />
		</div>
	)
}
