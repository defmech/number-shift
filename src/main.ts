import './style.scss';

console.log('bongo');

function init() {
	const numbers = document.getElementById('numbers');

	console.log(numbers);

	if (!numbers) return;

	let targetValue = 0;

	setInterval(() => {
		targetValue = targetValue === 9 ? 0 : (targetValue += 1);

		numbers.setAttribute('number', `${targetValue}`);
	}, 1000);
}

init();
