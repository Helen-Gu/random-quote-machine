//app.js
const url = 'https://api.quotable.io/random';

document.addEventListener('DOMContentLoaded', function () {
	generateQuote();
	const newQuote = document.getElementById('new-quote');
	console.log(newQuote);
	newQuote.addEventListener('click', () => {
		generateQuote();
	});
});

const generateQuote = () => {
	fetch(url)
		.then(function (data) {
			return data.json();
		})
		.then(function (data) {
			document.querySelector('#text').innerHTML = data.content;
			document.querySelector('#author').innerHTML = '- ' + data.author;
			colorRandomizer();
		})
		.catch(function (err) {
			console.log(err);
		});
};
const colorRandomizer = () => {
	const myColors = [
		'#16a085',
		'#27ae60',
		'#2c3e50',
		'#f39c12',
		'#e74c3c',
		'#9b59b6',
		'#FB6964',
		'#342224',
		'#472E32',
		'#BDBB99',
		'#77B1A9',
		'#73A857',
	]; //array of colors
	const randomNum = Math.floor(Math.random() * myColors.length); //generate random number

	const randomColor = myColors[randomNum]; //store my random color
	// modify bg and txt color with my random color
	const body = document.querySelector('body');
	body.setAttribute('style', `background-color: ${randomColor}`);
	const buttons = document.querySelectorAll('.button');
	for (const button of buttons) {
		button.setAttribute('style', `background-color: ${randomColor}`);
	}
};
