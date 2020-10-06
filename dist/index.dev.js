"use strict";

//app.js
var url = 'https://api.quotable.io/random';
document.addEventListener('DOMContentLoaded', function () {
  generateQuote();
  var newQuote = document.getElementById('new-quote');
  console.log(newQuote);
  newQuote.addEventListener('click', function () {
    generateQuote();
  });
});

var generateQuote = function generateQuote() {
  fetch(url).then(function (data) {
    return data.json();
  }).then(function (data) {
    document.querySelector('#text').innerHTML = data.content;
    document.querySelector('#author').innerHTML = '- ' + data.author;
    colorRandomizer();
  })["catch"](function (err) {
    console.log(err);
  });
};

var colorRandomizer = function colorRandomizer() {
  var myColors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857']; //array of colors

  var randomNum = Math.floor(Math.random() * myColors.length); //generate random number

  var randomColor = myColors[randomNum]; //store my random color
  // modify bg and txt color with my random color

  var body = document.querySelector('body');
  body.setAttribute('style', "background-color: ".concat(randomColor));
  var buttons = document.querySelectorAll('.button');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var button = _step.value;
      button.setAttribute('style', "background-color: ".concat(randomColor));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};