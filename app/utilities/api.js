var api  = {

  getDailyWeather() {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=625144&appid=6682c14b913c161756463200a81ce3b5';
    return fetch(url).then((response) => response.json());
  },

};

module.exports = api;
