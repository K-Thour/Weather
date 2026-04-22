import CardImage from './CardImage'
import StatsGrid from './StatsGrid'

export default function WeatherCard({ weather, theme }) {
  return (
    <div className="weather-card">
      {/* Hero image with gradient overlay and condition badge */}
      <CardImage theme={theme} />

      <div className="card-body">
        {/* City title with weather icon on each side */}
        <div className="city-row">
          <span className="city-weather-icon">{theme.icon}</span>
          <h2 className="city-name">{weather.name}</h2>
          <span className="city-weather-icon">{theme.icon}</span>
        </div>

        {/* OWM animated icon — only available when using an OWM API key */}
        {weather.owmIcon && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.owmIcon}@2x.png`}
            alt={weather.description}
            className="owm-icon"
          />
        )}

        {/* Weather statistics */}
        <StatsGrid weather={weather} />

        {/* Description sentence */}
        <p className="weather-description">
          The weather can be described as{' '}
          <em className="desc-highlight">{weather.description}</em>{' '}
          and feels like <strong>{Number(weather.feelsLike).toFixed(2)}°C</strong>
        </p>
      </div>
    </div>
  )
}
