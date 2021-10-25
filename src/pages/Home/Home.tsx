import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/storeDispatch'
import { selectCurrentWeatherData } from '../../store/selectors'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { Day } from './components/Day/Day'
import { DayInfo } from './components/DayInfo/DayInfo'
import { ThisDay } from './components/ThisDay/ThisDay'
import s from './Home.module.scss'

interface Props {

}

export const Home = (props: Props) => {
	const dispatch = useCustomDispatch()
	const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentWeather('minsk'))
	}, [])

	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<Day weather={weather} />
				<DayInfo />
			</div>
			<ThisDay />
		</div>
	)
}
