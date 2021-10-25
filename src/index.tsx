import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Provider/ThemeProvider'

import App from './App'

import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
