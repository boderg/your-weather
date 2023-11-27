function getWeather() {
  const apiKey = 'b22d08d2f4337aadcbe469786fbe812e';
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name.');
    return;
}


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
}
