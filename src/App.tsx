import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'


function App() {
	return <div className='App'>
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/month-statistics' component={MonthStatistics} exact />
		</Switch>
	</div>
}

export default App
