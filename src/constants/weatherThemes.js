// constants/weatherThemes.js

export const WEATHER_THEMES = {
  // ── Temperature-override themes (take priority over condition) ─────────────
  Arctic: {
    image: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&q=80',
    icon: '🥶',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    label: 'Arctic',
  },
  Scorching: {
    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80',
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
    label: 'Scorching',
  },

  // ── Condition-based themes ─────────────────────────────────────────────────
  Clear: {
    image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80', // ✅ actual clear blue sky
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    label: 'Sunny',
  },
  Clouds: {
    image: 'https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?q=80&w=1472&auto=format&fit=crop',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    label: 'Cloudy',
  },
  Rain: {
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&q=80', // ✅ rain on street
    icon: '🌧️',
    gradient: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)',
    label: 'Rainy',
  },
  Drizzle: {
    image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?w=800&q=80', // ✅ light drizzle/umbrella
    icon: '🌦️',
    gradient: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
    label: 'Drizzle',
  },
  Thunderstorm: {
    image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80', // ✅ lightning bolt
    icon: '⛈️',
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    label: 'Thunderstorm',
  },
  Snow: {
    image: 'https://images.pexels.com/photos/8877127/pexels-photo-8877127.jpeg',
    icon: '❄️',
    gradient: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    label: 'Snowy',
  },
  Mist: {
    image: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=800&q=80', // ✅ misty forest
    icon: '🌫️',
    gradient: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
    label: 'Misty',
  },
  Haze: {
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&q=80', // ✅ hazy skyline
    icon: '🌁',
    gradient: 'linear-gradient(135deg, #c79081 0%, #dfa579 100%)',
    label: 'Hazy',
  },
  Fog: {
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80', // ✅ foggy road
    icon: '🌫️',
    gradient: 'linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)',
    label: 'Foggy',
  },
  Smoke: {
    image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80', // ✅ smoky/hazy sky
    icon: '💨',
    gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    label: 'Smoky',
  },
  Dust: {
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&q=80', // ✅ sandstorm/dust
    icon: '🌪️',
    gradient: 'linear-gradient(135deg, #d3a34f 0%, #7a5030 100%)',
    label: 'Dusty',
  },
  default: {
    image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80',
    icon: '🌤️',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    label: 'Weather',
  },
}