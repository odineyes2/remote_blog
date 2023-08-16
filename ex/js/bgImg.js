const Imgs = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
,]

const todayImage = Imgs[Math.floor(Math.random()*Imgs.length)];
console.log(Math.floor(Math.random()*Imgs.length));
const bgImg = document.createElement("img");

bgImg.src = `img/${todayImage}`;

document.body.appendChild(bgImg);