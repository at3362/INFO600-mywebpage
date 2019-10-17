document.addEventListener('DOMContentLoaded', (event) => ){
	console.log('DOM fully loaded and parsed');
};

const btTest = document.querySelector('#btTest');

		btTest.addEventListener('click', event => {
		  btTest.style.backgroundColor = "red";
		});
