var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

var index = Math.floor(Math.random() * images.length);
var randomImg = images[index];
var img = document.createElement('img');
img.src = 'img/' + randomImg;

document.body.appendChild(img);