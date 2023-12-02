let units = 'metric';

function getWeather() {
  const apiKey = 'b22d08d2f4337aadcbe469786fbe812e';
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  const geolocationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

  fetch(geolocationUrl)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;

  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=${units}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
      displayForecast(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
})

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
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

  const sunriseTime = sunriseDate.getUTCHours().toString().padStart(2, '0') + ':' + sunriseDate.getUTCMinutes().toString().padStart(2, '0');
  const sunsetTime = sunsetDate.getUTCHours().toString().padStart(2, '0') + ':' + sunsetDate.getUTCMinutes().toString().padStart(2, '0');

  let tempSymbol = units === 'imperial' ? '°f' : '°c';
  let windUnit = units === 'imperial' ? 'mph' : 'm/s';

  const htmlCurrent = `
                <p class="date-time">${cityDateTime}</p>
                <h2 class="city">${cityName}</h2>
                <h1 class="temp">${temperature.toFixed(1)} <sup>${tempSymbol}</sup></h1>
                <p class="feels">Feels Like: ${feels_like.toFixed(1)} <sup>${tempSymbol}</sup></p>
                <img class="icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weatherIcon">
                <p class="description">${description}</p>
                <p class="humidity">Humidity: ${humidity} <sup>%</sup></p>
                <p class="wind">Wind Speed: ${wind} ${windUnit}</p>
                <p class="pressure">Atmospheric Pressure: ${pressure} hPa</p>
                <p class="sunrise-set">Sunrise: ${sunriseTime} / Sunset: ${sunsetTime}</p>`;

  weatherInfo.innerHTML = htmlCurrent;
}

function displayForecast(data) {
  const forecastInfo = document.getElementById('forecastInfo');
  const forecast = data.daily;

  let htmlForecast = '';

  for (let i = 1; i <= 4; i++) {
    const forecastDate = new Date((forecast[i].dt + data.timezone_offset) * 1000);
    const forecastDay = forecastDate.toLocaleString('en-GB', { weekday: 'long' });
    const forecastIcon = forecast[i].weather[0].icon;
    const forecastTemp = forecast[i].temp.day.toFixed(1);
    const forecastDescription = forecast[i].weather[0].description;

    let tempSymbol = units === 'imperial' ? '°f' : '°c';

    htmlForecast += `
                <div class="forecast-day">
                    <p class="forecast-date">${forecastDay}</p>
                    <p class="forecast-temp">${forecastTemp} <sup>${tempSymbol}</sup></p>
                    <img class="forecast-icon" src="https://openweathermap.org/img/wn/${forecastIcon}.png" alt="forecastIcon">                    
                    <p class="forecast-description">${forecastDescription}</p>
                </div>`;
  }

  forecastInfo.innerHTML = htmlForecast;

}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  getWeather();
})
}

document.getElementById('units').addEventListener('change', function() {
  if (this.checked) {
      units = 'imperial';
  } else {
      units = 'metric';
  }
  getWeather();
});

var modal = document.getElementById("about");

var btn = document.getElementById("aboutBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}