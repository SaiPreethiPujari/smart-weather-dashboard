async function getWeather(){

let city = document.getElementById("city").value;

if(city === ""){
    alert("Please enter a city name");
    return;
}

try{

let response = await fetch(`http://localhost:5000/weather/${city}`);

let data = await response.json();

document.getElementById("weatherResult").innerHTML = `
<h2>${data.name}</h2>
<img class="weather-icon" src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon">
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind Speed: ${data.wind.speed} m/s</p>
`;

}
catch(error){

document.getElementById("weatherResult").innerHTML =
"<p>Unable to fetch weather data</p>";

}

}