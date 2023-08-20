const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const parsedHr = String(hr).padStart(2, "0");
  const parsedMin = String(min).padStart(2, "0");
  const parsedSec = String(sec).padStart(2, "0");

  clock.innerText = `${parsedHr}:${parsedMin}:${parsedSec}`;
}

getClock();
setInterval(getClock, 1000);
