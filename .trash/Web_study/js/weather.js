const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6f40d69fd7b538642de0f6cf7b85ee8a";

function onGeo(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      city.innerText = date.name;
      weather.innerText = `${date.weather[0].main} / ${date.main.temp} / `;
    });
}

function onGeoErr() {
  alert("Can't find you. No weather Info For you.");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);
