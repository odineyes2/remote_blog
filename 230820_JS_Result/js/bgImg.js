const ImgList = ["0.jpeg", "1.jpeg", "3.jpeg"];
const ImgNo = Math.floor(Math.random() * ImgList.length);
const todayImg = ImgList[ImgNo];

const bgImg = document.createElement("img");
bgImg.src = `img/${todayImg}`;
// console.log(bgImg);
document.body.appendChild(bgImg);
