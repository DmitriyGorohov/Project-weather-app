import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Provider/ThemeProvider'

import App from './App'

import './styles/index.scss'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
)
