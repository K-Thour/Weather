import { codeToCondition } from '../utils/weatherHelpers'

/**
 * Fetches weather data from wttr.in — completely free, no API key required.
 * @param {string} city
 * @returns {Promise<object>} Normalised weather data object
 */
export async function fetchWttr(city) {
  const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
  if (!res.ok) throw new Error('City not found. Please check the spelling.')

  const data = await res.json()
  const current  = data?.current_condition?.[0]
  const area     = data?.nearest_area?.[0]
  const areaName = area?.areaName?.[0]?.value
  const country  = area?.country?.[0]?.value
  const code     = parseInt(current?.weatherCode, 10)

  // wttr.in returns an empty nearest_area object when the query resolves to a
  // country / region rather than a specific city (e.g. "Greenland").
  // In that case areaName/country are undefined, so fall back to the raw input.
  const displayName =
    areaName && country ? `${areaName}, ${country}` : city

  return {
    source:      'wttr',
    name:        displayName,
    condition:   codeToCondition(code),
    description: current.weatherDesc[0].value.toLowerCase(),
    temp:        parseFloat(current.temp_C),
    feelsLike:   parseFloat(current.FeelsLikeC),
    humidity:    parseInt(current.humidity, 10),
    tempMin:     parseFloat(data.weather[0].mintempC),
    tempMax:     parseFloat(data.weather[0].maxtempC),
    windSpeed:   parseFloat(current.windspeedKmph),
    visibility:  parseFloat(current.visibility),
    owmIcon:     null,
  }
}

/**
 * Fetches weather data from OpenWeatherMap using the user's API key.
 * @param {string} city
 * @param {string} apiKey
 * @returns {Promise<object>} Normalised weather data object
 */
export async function fetchOWM(city, apiKey) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  )
  if (res.status === 401) throw new Error('Invalid API key. Please check and try again.')
  if (res.status === 404) throw new Error('City not found. Please check the spelling.')
  if (!res.ok)            throw new Error('Failed to fetch weather data. Try again later.')

  const d = await res.json()
  console.log(d)
  return {
    source:      'owm',
    name:        d.name,
    condition:   d.weather[0].main,
    description: d.weather[0].description,
    temp:        d.main.temp,
    feelsLike:   d.main.feels_like,
    humidity:    d.main.humidity,
    tempMin:     d.main.temp_min,
    tempMax:     d.main.temp_max,
    windSpeed:   d.wind.speed,
    visibility:  d.visibility / 1000,
    owmIcon:     null,
  }
}
