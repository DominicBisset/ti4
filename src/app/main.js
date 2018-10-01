import App from './App.html';


// let response = await fetch('./data/technologies.json');
// let data = await response.json();
// return {
//     techs: data.techs
// }

var app = new App({
	target: document.body
});

export default app;