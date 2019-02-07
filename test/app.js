import BgCheck from '../src';

var image = document.getElementById('image');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');

new BgCheck(image, content1).then(function (brightness, res) {
    if (brightness < 125) {
        content1.style.color = 'white'
    }
    result1.textContent = brightness
})

new BgCheck(image, content2).then(function (brightness, res) {
    if (brightness < 125) {
        content2.style.color = 'white'
    }
    result2.textContent = brightness
})