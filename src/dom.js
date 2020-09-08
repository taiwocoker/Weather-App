const Dom = _=> {
      const location = document.getElementById('w-location');
      const desc = document.getElementById('w-desc');
      const string = document.getElementById('w-string');
      const details = document.getElementById('w-details');
      const icon = document.getElementById('w-icon');
      const humidity = document.getElementById('w-humidity');
      const feelsLike = document.getElementById('w-feels-like');
      const pressure = document.getElementById('w-pressure');
      const wind = document.getElementById('w-wind');
  


    const updateDom =  (weather) => {
      location.textContent = weather.name;
      desc.textContent = weather.weather[0].description;
      string.innerHTML = `${Math.floor(weather.main.temp)}<span>&#xb0;</span>`;
      icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
      humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
      feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
      pressure.textContent = `Pressure: ${weather.main.pressure}pascal`;
      wind.textContent = `Wind: ${weather.wind.speed}Km/h`;
    }

    return updateDom
  }
  
  export default Dom;