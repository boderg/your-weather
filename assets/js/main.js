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

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  const cityName = data.timezone;
  const temperature = data.current.temp;


  const htmlCurrent = `
  <p class="date-time">${cityDateTime}</p>
  <h2 class="city">${cityName}</h2>
  <h1 class="temp">${temperature.toFixed(1)} <sup>°c</sup></h1>
  `;

  weatherInfo.innerHTML = htmlCurrent;
}

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    getWeather();
})
}
