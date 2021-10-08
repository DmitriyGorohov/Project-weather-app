import React from 'react'
import { ITem } from '../pages/Home/components/DayInfo/DayInfo'
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector'
import s from './Popup.module.scss'
import { DayItem } from '../pages/Home/components/DayInfo/DayItem'

interface Props { }

export const Popup = (props: Props) => {
	const items = [
		{ icon_id: 'temp', name: 'Температура', value: '20° - ощущается как 17°' },
		{ icon_id: 'pressure', name: 'Давление ', value: '765 мм ртутного столба - нормальное' },
		{ icon_id: 'precipitation', name: 'Осадки', value: 'Без осадков' },
		{ icon_id: 'wind', name: 'Ветер', value: '3 м/с юго-запад - легкий ветер' },
	]


	return (
		<React.Fragment>
			<div className={s.blur}></div>
			<div className={s.popup}>
				<div className={s.day}>
					<div className={s.day__temp}>20&deg;</div>
					<div className={s.day__name}>Сегодня</div>
					<div className={s.day__img}>
						<GlobalSvgSelector id='sun' />
					</div>
					<div className={s.day__time}>
						Время: <span>21:55</span>
					</div>
					<div className={s.day__city}>
						Город: <span>Минск</span>
					</div>
				</div>
				<div className={s.day__info}>
					<div className={s.day__info_items}>
						{items.map((item: ITem, index: number) => (
							<DayItem key={`${item.name}_${index}`} item={item} />
						))}
					</div>
				</div>
				<div className={s.close}>
					<GlobalSvgSelector id='close' />
				</div>
			</div>
		</React.Fragment>
	)
}
