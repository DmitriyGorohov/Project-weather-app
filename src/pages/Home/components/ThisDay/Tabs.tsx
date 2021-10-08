import React from 'react'
import s from './ThisDay.module.scss'

interface Props { }

interface ITab {
	value: string
}

export const Tabs = (props: Props) => {
	const tabs: ITab[] = [{ value: 'На неделю' }, { value: 'На месяц' }, { value: 'На 10 дней' }]

	return (
		<div className={s.tabs}>
			<div className={s.tabs__wrapper}>
				{tabs.map((tab: ITab, index: number) => (
					<div key={`${tab}__${index}`} className={s.tab}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	)
}
