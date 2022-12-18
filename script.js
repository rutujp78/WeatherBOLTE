// const dotenv = require("dotenv");
// dotenv.config();
// const apiKey = process.env.API_KEY;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "99d2f5d0e5msh172097f2bd56825p198234jsn7690677c1510",
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Nagpur");

function AMTw () {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amravati`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        AMTcloud_pct.innerHTML = response.cloud_pct
        AMTtemp.innerHTML = response.temp
        AMTfeels_like.innerHTML = response.feels_like
        AMThumidity.innerHTML = response.humidity
        AMTmin_temp.innerHTML = response.min_temp
        AMTmax_temp.innerHTML = response.max_temp
        AMTwind_speed.innerHTML = response.wind_speed
        AMTwind_degrees.innerHTML = response.wind_degrees
        AMTsunrise.innerHTML = response.sunrise
        AMTsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
AMTw();
function AKLw () {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Akola`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        AKLcloud_pct.innerHTML = response.cloud_pct
        AKLtemp.innerHTML = response.temp
        AKLfeels_like.innerHTML = response.feels_like
        AKLhumidity.innerHTML = response.humidity
        AKLmin_temp.innerHTML = response.min_temp
        AKLmax_temp.innerHTML = response.max_temp
        AKLwind_speed.innerHTML = response.wind_speed
        AKLwind_degrees.innerHTML = response.wind_degrees
        AKLsunrise.innerHTML = response.sunrise
        AKLsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
AKLw();
function MBIw () {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        MBIcloud_pct.innerHTML = response.cloud_pct
        MBItemp.innerHTML = response.temp
        MBIfeels_like.innerHTML = response.feels_like
        MBIhumidity.innerHTML = response.humidity
        MBImin_temp.innerHTML = response.min_temp
        MBImax_temp.innerHTML = response.max_temp
        MBIwind_speed.innerHTML = response.wind_speed
        MBIwind_degrees.innerHTML = response.wind_degrees
        MBIsunrise.innerHTML = response.sunrise
        MBIsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
MBIw();
function PNEw () {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        PNEcloud_pct.innerHTML = response.cloud_pct
        PNEtemp.innerHTML = response.temp
        PNEfeels_like.innerHTML = response.feels_like
        PNEhumidity.innerHTML = response.humidity
        PNEmin_temp.innerHTML = response.min_temp
        PNEmax_temp.innerHTML = response.max_temp
        PNEwind_speed.innerHTML = response.wind_speed
        PNEwind_degrees.innerHTML = response.wind_degrees
        PNEsunrise.innerHTML = response.sunrise
        PNEsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
PNEw();
function WRDw () {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Wardha`, options)
    .then(response => response.json())
    .then((response) => {

        // console.log(response)
        WRDcloud_pct.innerHTML = response.cloud_pct
        WRDtemp.innerHTML = response.temp
        WRDfeels_like.innerHTML = response.feels_like
        WRDhumidity.innerHTML = response.humidity
        WRDmin_temp.innerHTML = response.min_temp
        WRDmax_temp.innerHTML = response.max_temp
        WRDwind_speed.innerHTML = response.wind_speed
        WRDwind_degrees.innerHTML = response.wind_degrees
        WRDsunrise.innerHTML = response.sunrise
        WRDsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
WRDw();