const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const img = document.createElement("img");
document.body.appendChild(img);
const todayImgNo = Math.floor(Math.random() * images.length);
const todayImg = images[todayImgNo];
img.src = `img/${todayImg}`;
