const emailInput = document.querySelector('#exampleFormControlInput1');
const message = document.querySelector('#message');
const scriptURL =
	'https://script.google.com/macros/s/AKfycbzp2YUui1Ts1XZnLqbfdOc2Y9d-BAq0kpoxQdYzEQBZoOwh4srSpg6Ss5YZJ4leD9pX/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async function (e) {
	e.preventDefault();
	try {
		await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
		message.innerText = 'Email submitted';
		console.log('Success!');
	} catch (error) {
		console.error('Error!');
	}
});
