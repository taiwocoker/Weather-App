class Weather {
    constructor(city, unit) {
      this.API_KEY = '77c3590e13d0c9ba0f698810bbdb9cfd';
      this.city = city;
      this.unit = unit;
    }
  
    // eslint-disable-next-line class-methods-use-this
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.unit}&APPID=${this.API_KEY}`, { mode: 'cors' });
  
      const responseData = await response.json();
  
      return responseData;
    }

    changeLocation(city, unit) {
        this.city = city;
        this.unit = unit;
      }
  
  }
  
  export default Weather;