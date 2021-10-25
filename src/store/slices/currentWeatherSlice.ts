import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AxiosResponse} from 'axios'
import {Weather} from '../types/types'

type CurrentWeather = {
	weather: Weather
	isLoading: boolean
	// response: Response
}

// type Response = {
// 	status: number
// 	message: string
// }

const initialState: CurrentWeather = {
	weather: {
		main: {
			temp: 0,
		},
		name: '',
	},
	isLoading: false,
	// respose: {
	// 	status: 0,
	// 	message: '',
	// },
}

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true
		},
		fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
			state.isLoading = false
			state.weather = action.payload.data
			// state.respose = {
			// 	status: action.payload.status,
			// 	message: action.payload.statusText,
			// }
		},
		fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
			state.isLoading = false
			// state.respose = {
			// 	status: action.payload.status,
			// 	message: action.payload.statusText,
			// }
		},
	},
})

export default currentWeatherSlice.reducer
