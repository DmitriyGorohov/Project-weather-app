import {Theme} from './../context/ThemeContext'

export function changeCssRootVariable(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement

	let components = [
		'body-background',
		'components-background',
		'card-background',
		'card-shadow',
		'text-color',
		'input-background',
	]

	components.forEach((component) => {
		root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
	})
}
