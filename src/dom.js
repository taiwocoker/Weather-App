class Dom {
  constructor() {
    this.location = document.getElementById('w-location');
    this.main = document.getElementById('w-main');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.min_temp = document.getElementById('w-temp_min');
    this.max_temp = document.getElementById('w-temp_max');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  updateDom(weather) {
    this.location.textContent = weather.name;
    this.main.textContent = weather.weather[0].main;
    this.string.innerHTML = `${Math.floor(weather.main.temp)}<span>&#xb0;</span>`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.min_temp.innerHTML = `Minimum Temp: ${weather.main.temp_min}<span>&#xb0;</span>C`;
    this.max_temp.innerHTML = `Maximum Temp: ${weather.main.temp_max}<span>&#xb0;</span>C`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}Km/h`;
  }
}

export default Dom;