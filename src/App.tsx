import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header/Header'
import { Home } from './pages/Home/Home'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'
// import { Popup } from './Popup/Popup'

function App() {
	return (
		<div className='global__container'>
			{/* <Popup /> */}
			<div className='container'>
				<Header />
				<Switch>
					<Route path='/' component={Home} />
					<Route path='/month-statistics' component={MonthStatistics} exact />
				</Switch>
			</div>
		</div>
	)
}

export default App
