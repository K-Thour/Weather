// Hero image section of the weather card with an overlay and condition badge
export default function CardImage({ theme }) {
  return (
    <div className="card-image-wrap">
      <img src={theme.image} alt={theme.label} className="card-image" />
      <div className="image-overlay" style={{ background: theme.gradient }} />
      <div className="weather-badge">
        <span className="badge-icon">{theme.icon}</span>
        <span className="badge-label">{theme.label}</span>
      </div>
    </div>
  )
}
