import React from 'react'
import s from './DayInfo.module.scss'
import { ITem } from './DayInfo'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector'

interface Props {
	item: ITem
}

export const DayItem = ({ item }: Props) => {
	const { icon_id, value, name } = item
	return (
		<div className={s.item}>
			<div className={s.indicator}>
				<IndicatorSvgSelector id={icon_id} />
			</div>
			<div className={s.indicator_name}>{name}</div>
			<div className={s.indicator_value}>{value}</div>
		</div>
	)
}
