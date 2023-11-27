function getWeather() {
  const apiKey = 'b22d08d2f4337aadcbe469786fbe812e';
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name.');
    return;
}

const geolocationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

fetch(geolocationUrl)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;

const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  displayWeather(data);
  
})
.catch(error => {
  console.error('Error fetching weather data:', error);
  alert('Error fetching weather data. Please try again.');
});
})

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  // const cityName = data.timezone;
  const temperature = data.current.temp;
  const feels_like = data.current.feels_like;
  const icon = data.current.weather[0].icon;
  const description = data.current.weather[0].description;
  const humidity = data.current.humidity;
  const wind = data.current.wind_speed;
  const pressure = data.current.pressure;
  const sunrise  = data.current.sunrise;
  const sunset = data.current.sunset;
  const timezoneOffset = data.timezone_offset;

  const now = new Date();
  const cityTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (timezoneOffset * 1000));
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const cityDateTime = new Intl.DateTimeFormat('en-GB', options).format(cityTime);

  const sunriseDate = new Date((sunrise + timezoneOffset) * 1000);
  const sunsetDate = new Date((sunset + timezoneOffset) * 1000);

  const htmlCurrent = `
                <p class="date-time">${cityDateTime}</p>
                <h2 class="city">${cityName}</h2>
                <h1 class="temp">${temperature.toFixed(1)} <sup>°c</sup></h1>
                <p class="feels">Feels Like: ${feels_like.toFixed(1)} <sup>°c</sup></p>
                <img class="icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weatherIcon">
                <p class="description">${description}</p>
                <p class="humidity">Humidity: ${humidity} <sup>%</sup></p>
                <p class="wind">Wind Speed: ${wind} m/s</p>
                <p class="pressure">Atmospheric Pressure: ${pressure} hPa</p>
                <p class="sunrise-set">Sunrise: ${sunriseDate} / Sunset: ${sunsetDate}</p>
                `;

  weatherInfo.innerHTML = htmlCurrent;
}

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    getWeather();
  })
}
