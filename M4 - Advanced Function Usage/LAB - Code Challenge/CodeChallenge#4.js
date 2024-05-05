/*Code Challenge #4
Scenario
There is a REST service at http://localhost:3000/weather that returns the current weather data for selected cities. The request is made using GET, with the name of the city and optionally the type of information you want to get (selectable: 'wind', 'clouds', 'temp', 'precipitation').

For example, for the query:


http://localhost:3000/weather?city=Oslo&info=wind

we get the answer in JSON format:


{
    "city": "Oslo",
    "weather": {
      "wind": {
          "speed": 8,
          "deg": 170
      }
    }
}

If only the name of the city, or an incorrect information type is given, the complete weather for a given location will still be displayed.

For example, for the following query:


http://localhost:3000/weather?city=Oslo
we should get the answer:


"city": "Oslo",
    "weather": {
        "wind": {
            "speed": 8,
            "deg": 170
        },
        "clouds": 0,
        "temp": 0,
        "precipitation": 0
    }
}

Wind speed in meters per second, direction in degrees, temperature in Celsius, cloud cover and precipitation as a percentage. Entering a city name for which the service does not provide weather data will only return that name.

Write a getWeather function that will retrieve weather information from the server. The function takes two arguments:

the name of the city or cities (if you are interested in one city, it is just the name, if several, it is an array of names)
the type of information ('wind' etc.), and if no argument is given or 'all' is given, then all data is returned.
The retrieved data should be displayed in the console in a user readable form. Additionally, in the event that the wind speed is higher than 15 m/s or the temperature is lower than -20ºC, an appropriate warning should appear in the console.

Use promises and the fetch method in the implementation.*/

let getWeather = function(location, info) {
    let cities;
    let url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20; 

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    if(!Array.isArray(location)) {
        cities = [location]
    } else {
        cities = location;
    }
    let infoQuery = '&info=';
    let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all' ? infoQuery + info : ''}`));
    Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            for(let city of data) {
                console.log('');
                console.log(`CITY: ${city.city}`);
                for(let key in city.weather) {
                    if(key === 'wind') {
                        showWindInfo(city.weather);
                    } else {
                        showInfo(city.weather, key);
                    }
                }
            }
        })
        .catch(e => console.log(e.message));
};

// Example usage:
getWeather(['Oslo', 'London', 'Paris'], 'wind');
getWeather('New York', 'temp');
getWeather('Tokyo', 'precipitation');