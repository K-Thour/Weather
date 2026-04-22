// utils/weatherHelpers.js

import { WEATHER_THEMES } from '../constants/weatherThemes'

/**
 * Maps a wttr.in numeric weather code to one of our theme keys.
 * Covers all condition types: Clear, Clouds, Fog, Drizzle, Rain, Snow, Thunderstorm.
 * @param {number} code
 * @returns {string}
 */
export function codeToCondition(code) {
  if (code === 113) return 'Clear'
  if ([116, 119, 122].includes(code)) return 'Clouds'

  // Fog / Mist codes
  if ([143, 248, 260].includes(code)) return 'Fog'

  // Drizzle (light rain codes separated from heavy rain)
  if ([263, 266, 293, 296, 353].includes(code)) return 'Drizzle'

  // Rain (moderate to heavy)
  if ([176, 281, 284, 299, 302, 305, 308, 356, 359].includes(code)) return 'Rain'

  // Snow / Sleet
  if ([179, 182, 185, 227, 230, 311, 314, 317, 320,
       323, 326, 329, 332, 335, 338, 350, 362, 365,
       368, 371, 374, 377].includes(code)) return 'Snow'

  // Thunderstorm
  if ([200, 386, 389, 392, 395].includes(code)) return 'Thunderstorm'

  return 'default'
}

/**
 * Returns the best-fit theme object by combining weather condition AND temperature.
 *
 * Priority order:
 *  1. Extreme temperature → Arctic / Scorching  (always overrides)
 *  2. Temperature + condition combined checks    (refined matching)
 *  3. Pure condition fallback                   (API value wins)
 *
 * @param {string} condition - e.g. "Clouds", "Rain", "Clear"
 * @param {number} [temp]    - current temperature in °C
 * @returns {object}         - theme object from WEATHER_THEMES
 */
export function getTheme(condition, temp) {
  const t = typeof temp === 'number' ? temp : null

  // ── 1. Extreme temperature overrides ──────────────────────────────────────
  if (t !== null) {
    if (t <= -15) return WEATHER_THEMES.Arctic     // polar / Antarctica
    if (t >= 40)  return WEATHER_THEMES.Scorching  // desert / extreme heat
  }

  // ── 2. Temperature-refined condition matching ──────────────────────────────
  if (t !== null) {

    // Near/below freezing: clouds, mist or rain at ≤ 2°C → treat as Snow
    if (t <= 2 && ['Clouds', 'Mist', 'Fog', 'Drizzle', 'Rain'].includes(condition))
      return WEATHER_THEMES.Snow

    // Thunderstorm always wins regardless of temperature
    if (condition === 'Thunderstorm')
      return WEATHER_THEMES.Thunderstorm

    // Cold fog / mist (≤ 12°C)
    if (t <= 12 && ['Fog', 'Mist'].includes(condition))
      return WEATHER_THEMES.Mist

    // Haze: warm & hazy (> 12°C) → Haze image; cold → Fog/Mist image
    if (condition === 'Haze')
      return t > 12 ? WEATHER_THEMES.Haze : WEATHER_THEMES.Mist

    // Heavy rain (moderate-to-high temp)
    if (condition === 'Rain')
      return t >= 10 ? WEATHER_THEMES.Rain : WEATHER_THEMES.Snow

    // Light drizzle
    if (condition === 'Drizzle')
      return WEATHER_THEMES.Drizzle

    // Smoke: always show Smoke image
    if (condition === 'Smoke')
      return WEATHER_THEMES.Smoke

    // Dust / Sandstorm: hot & dusty
    if (condition === 'Dust')
      return t >= 25 ? WEATHER_THEMES.Dust : WEATHER_THEMES.Mist

    // Cloudy: cold cloudy → Snow; mild cloudy → Clouds
    if (condition === 'Clouds')
      return t <= 2 ? WEATHER_THEMES.Snow : WEATHER_THEMES.Clouds

    // Clear sky:
    //   hot clear (≥ 32°C) → Clear (bright sun)
    //   mild clear          → Clear
    if (condition === 'Clear')
      return WEATHER_THEMES.Clear

    // Snow condition at any temp
    if (condition === 'Snow')
      return WEATHER_THEMES.Snow
  }

  // ── 3. Pure condition fallback (no temperature data) ──────────────────────
  return WEATHER_THEMES[condition] || WEATHER_THEMES.default
}