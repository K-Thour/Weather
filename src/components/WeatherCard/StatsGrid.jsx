// 2-column grid of weather stat tiles
const STATS = [
  { icon: '🌡️', label: 'Temperature', getValue: (w) => `${Number(w.temp).toFixed(2)}°C` },
  { icon: '💧', label: 'Humidity',    getValue: (w) => `${w.humidity}%` },
  { icon: '🔽', label: 'Min Temp',    getValue: (w) => `${Number(w.tempMin).toFixed(2)}°C` },
  { icon: '🔼', label: 'Max Temp',    getValue: (w) => `${Number(w.tempMax).toFixed(2)}°C` },
  { icon: '🌬️', label: 'Wind Speed',  getValue: (w) => `${w.windSpeed} ${w.source === 'owm' ? 'm/s' : 'km/h'}` },
  { icon: '👁️', label: 'Visibility',  getValue: (w) => `${Number(w.visibility).toFixed(1)} km` },
]

export default function StatsGrid({ weather }) {
  return (
    <div className="stats-grid">
      {STATS.map(({ icon, label, getValue }) => (
        <div className="stat-item" key={label}>
          <span className="stat-icon">{icon}</span>
          <div>
            <span className="stat-label">{label}</span>
            <span className="stat-value">{getValue(weather)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
