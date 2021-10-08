import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './Day.module.scss'

interface Props { }

export const Day = (props: Props) => {
	return (
		<div className={s.day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.temp}>20&deg;</div>
					<div className={s.day_name}>Сегодня</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={s.bottom__block}>
				<div className={s.time}>
					Время: <span>21:55</span>
				</div>
				<div className={s.city}>
					Город: <span>Минск</span>
				</div>
			</div>
		</div>
	)
}
