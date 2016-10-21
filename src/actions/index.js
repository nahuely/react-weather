import axios from 'axios'

const API_KEY = "a28af9a0a03fb8b05758c1580c1611d7"
const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city) {
  const url = `${API_ENDPOINT}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
