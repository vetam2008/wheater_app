const searchInput = document.querySelector('input');
let weatherBlock = document.querySelector('#weather_app')


searchInput.addEventListener('keydown',(event) => {
    if(event.key == 'Enter' &&
        searchInput.value != ""
    ){
        updateWeater(searchInput.value);
        searchInput.value = ""  ; 
    }
})

async function updateWeater (city){

    const apiKeyWeater = '159f46893a0b524f5c56011dabae2410';

    const apiUrlWeater = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=${apiKeyWeater}&units=metric`;

    let response = await fetch(apiUrlWeater);
    let result = await response.json();

    getWeater(result);
    
    
};
function getWeater(data){
    const location = data.name;
    const temp = Math.round(data.main.temp); 
    const wind = data.wind.speed;
    const main =data.weather[0].main;
    const humidity = data.main.humidity;
    const maxTem =data.main.temp_max;
    const minTem =data.main.temp_min;

    const riseSun = data.sys.sunrise;
    let sunriseTotal = new Date(riseSun * 1000);

    const setSun = data.sys.sunset;
    let sunsetTotal = new Date(setSun * 1000);
    
    const lat =data.coord.lat;
    const lon=data.coord.lon;

    searchCity.innerHTML = location;
    temperature.innerHTML = temp +"C°";
    summary.innerHTML = main;
    coord.innerHTML = lat + ',' + lon;
    sunrise.innerHTML = sunriseTotal.toLocaleString();
    sunset.innerHTML = sunsetTotal.toLocaleString();
    maxTemp.innerHTML = Math.round(maxTem);
    minTemp.innerHTML = Math.round(minTem);
    levelHumidity.innerHTML = humidity + " ";
    windSpeed.innerHTML =Math.round( wind + " ");



    switch (main) {
        case 'Clouds':
            iconToday.innerHTML= '<img src="./images/icons/clouds.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/cloud.jpg)'
            break;
        case 'Thunderstorm':
            iconToday.innerHTML = '<img src="./images/icons/thunderstorm.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/Thunderstorm.jpg)'
            break;
        case 'Drizzle':
            iconToday.innerHTML = '<img src="./images/icons/shower_rain.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/Drizzle.jpg)'
            break;
        case 'Rain':
            iconToday.innerHTML = '<img src="./images/icons/rain.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/Rain.jpg)'
            break;
        case 'Snow':
            iconToday.innerHTML = '<img src="./images/icons/snow.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/snow.jpg)'
            break;
        case 'Mist':
            iconToday.innerHTML =  '<img src="./images/icons/mist.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/fog.jpg)'
            break;
        case 'Clear':
            iconToday.innerHTML = '<img src="./images/icons/clear_sky.svg" alt="">'
            document.body.style.backgroundImage = 'url(./images/background/goluboe.jpg)'
            break;
    }

}

let searchCity = document.querySelector('#search_city');
let iconToday = document.querySelector('#icon_today');
let temperature = document.querySelector('#temperature');
let summary = document.querySelector('#summary');
let coord = document.querySelector('#coord');
let sunrise = document.querySelector('#sunrise');
let sunset = document.querySelector('#sunset');
let maxTemp = document.querySelector('#max_temp');
let minTemp = document.querySelector('#min_temp');
let levelHumidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind');



