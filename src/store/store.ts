import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import currentWeatherSliceReduser from './slices/currentWeatherSlice'

const rootReducer = combineReducers({
	currentWeatherSliceReduser,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
