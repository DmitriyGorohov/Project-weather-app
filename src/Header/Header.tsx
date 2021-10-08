import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

interface Props { }

const API_KEY: string = 'b21371427780d50642723790f91a662d'
export const Header = (props: Props) => {
	const [theme, setTheme] = React.useState('light')
	const [query, setQuery] = React.useState('')
	const [weather, setWeather] = React.useState({})
	const [city, setCity] = React.useState(false)

	const options = [
		{ value: 'city-1', label: 'Минск' },
		{ value: 'city-2', label: 'Москва' },
		{ value: 'city-3', label: 'Братислава' },
	]

	const colorStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 10000,
			marginLeft: '25px',
			cursor: 'pointer',
			outline: 'none',

		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme === 'dark' ? '#FFF' : '#000',
		}),
	}

	const searchCity = (event: any) => {
		if (event.key === 'Enter') {
			fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result)
					setQuery('')
					console.log(result)
				})
		}
	}
	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	React.useEffect(() => {
		const root = document.querySelector(':root') as HTMLElement

		let components = [
			'body-background',
			'components-background',
			'card-background',
			'card-shadow',
			'text-color',
		]

		components.forEach((component) => {
			root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
		})
	}, [theme])

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<input
				className={s.search}
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={searchCity}
			/>
			<div className={s.wrapper}>
				<div className={s.theme} onClick={changeTheme}>
					<GlobalSvgSelector id='theme' />
				</div>
				<Select defaultValue={options[0]} styles={colorStyles} options={options} />
			</div>
		</header>
	)
}
