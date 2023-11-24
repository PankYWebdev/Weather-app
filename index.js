const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

// const API = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`;

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector('form');
const weather = document.querySelector('#weather');
const search = document.querySelector('#search');

const getWeather = async (city)=>{
    weather.innerHTML = `<h3>Loading....</h3>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.log(typeof(data))
     showWeather(data);
}

const showWeather = (data)=>{
    if(data.cod == "404"){weather.innerHTML = `<h4>City Not Found</h4>`
    return;}
    if(data.weather[0].description == 'few clouds') abc = "img/few cloud.png";
    if(data.weather[0].description == 'overcast clouds') abc = "img/overcastcloud.png";
    if(data.weather[0].description == 'haze') abc = "img/haze.png";
    if(data.weather[0].description == 'clear sky') abc = "img/clearsky.jpg";
    if(data.weather[0].description == 'broken clouds') abc = "img/borkencloud.jpg";
    if(data.weather[0].description == 'scattered clouds') abc = "img/borkencloud.jpg";
    if(data.weather[0].description == 'light rain') abc = "img/lightrain.webp";
    if(data.weather[0].description == 'moderate rain') abc = "img/lightrain.webp";
    if(data.weather[0].description == 'heavy intensity rain') abc = "img/heavyrain.webp";
    weather.innerHTML = `<div id="img">
                            <img src="${abc}">
                         </div>

                         <div>
                            <h3>Max Temp - ${data.main.temp_max}°C</h3>
                            <h3>Min Temp - ${data.main.temp_min}°C</h3>
                            <h4>${data.weather[0].description}</h4>
                         </div>`;
}

form.addEventListener('submit',(e)=>{
    console.log(search.value);
    getWeather(search.value);
    e.preventDefault();

});