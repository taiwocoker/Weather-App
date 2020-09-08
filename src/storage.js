class Storage {
    constructor(city, unit) {
      this.city = city;
      this.defaultCity = 'Lagos';
      this.unit = unit;
      this.defaultUnit = 'metric';
    }
  
    getLocationData() {
      if (localStorage.getItem('city') === null) {
        this.city = this.defaultCity;
      } else {
        this.city = localStorage.getItem('city');
      }
  
      if (localStorage.getItem('unit') === null) {
        this.unit = this.defaultUnit;
      } else {
        this.unit = localStorage.getItem('unit');
      }
  
      return {
        city: this.city,
      };
    }
  
    // eslint-disable-next-line class-methods-use-this
    setLocationData(city, unit) {
      localStorage.setItem('city', city);
      localStorage.setItem('unit', unit);
    }
  }
  
  export default Storage;