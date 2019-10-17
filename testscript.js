document.addEventListener('DOMContentLoaded', (event) => ){
	console.log('DOM fully loaded and parsed');
};

const button = document.querySelector('#btTest');

		button.addEventListener('click', event => {
		  button.style.backgroundColor = "red";
		});
