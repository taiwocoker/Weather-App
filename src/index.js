import Weather from './weather';
import Storage from './storage';
import Dom from './dom';

const storage = new Storage();

const dom = new Dom();

const storedWeather = storage.getLocationData();

const weather = new Weather(storedWeather.city, storedWeather.unit);

const changeBtn = document.getElementById('w-change-btn');
const city = document.getElementById('city');
const unit = document.getElementById('unit');

function getWeather() {
  weather.getWeather(city.value, unit.value)
    .then(results => {
      dom.updateDom(results);
    })
    // eslint-disable-next-line no-alert
}

document.addEventListener('DOMContentLoaded', getWeather());

changeBtn.addEventListener('click', () => {
  weather.changeLocation(city.value, unit.value);

  storage.setLocationData(city.value, unit.value);

  getWeather();

  document.getElementById('close').click();
});