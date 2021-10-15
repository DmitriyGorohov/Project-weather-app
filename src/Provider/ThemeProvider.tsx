import React from 'react'
import { ReactNode } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'
import { changeCssRootVariable } from '../model/ChangeCssRootVariable'
import { storage } from '../model/Storage'

interface Props {
	children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = React.useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

	changeCssRootVariable(theme)

	function changeTheme(theme: Theme) {
		storage.setItem('theme', theme)
		setTheme(theme)
		changeCssRootVariable(theme)
	}


	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	)
}
