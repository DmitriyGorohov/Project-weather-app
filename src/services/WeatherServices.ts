import axios, {AxiosResponse} from 'axios'
import api from '../axios'
import {Weather} from '../store/types/types'

export class WeatherServices {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return api.get<Weather>(`/weather?q=${city}`)
	}
}
