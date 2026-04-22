import { useState } from 'react'
import './App.css'

import { WEATHER_THEMES } from './constants/weatherThemes'
import { getTheme } from './utils/weatherHelpers'
import { fetchWttr,fetchOWM} from './services/weatherApi'

import Header      from './components/Header'
import SearchBar   from './components/SearchBar'
import ErrorBanner from './components/ErrorBanner'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { API_KEY } from './constants/envConstants'

export default function App() {
  const [city, setCity]       = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleSearch = async () => {
    const trimmed = city.trim()
    if (!trimmed) { setError('Please enter a city name.'); return }

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      // Uses the free wttr.in API by default (no key needed)
      let data;
      if(API_KEY){
        data = await fetchOWM(trimmed,API_KEY)
      }else{
        data = await fetchWttr(trimmed)
      }
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const theme = weather
    ? getTheme(weather.condition, weather.temp)
    : WEATHER_THEMES.default

  return (
    <div className="app-bg">
      <div className="widget-container">
        <Header />

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          loading={loading}
        />

        <ErrorBanner message={error} />

        {weather && <WeatherCard weather={weather} theme={theme} />}
      </div>
    </div>
  )
}
