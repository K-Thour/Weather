export default function SearchBar({ city, setCity, onSearch, loading }) {
  const handleKey = (e) => {
    if (e.key === 'Enter') onSearch()
  }

  return (
    <div className="search-section">
      <div className="input-wrapper">
        <span className="input-icon">📍</span>
        <input
          id="city-input"
          className="city-input"
          type="text"
          placeholder="City Name *"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>

      <button
        id="search-btn"
        className="search-btn"
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? <span className="spinner" /> : 'SEARCH'}
      </button>
    </div>
  )
}
