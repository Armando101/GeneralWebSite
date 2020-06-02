const a = document.getElementsByTagName('a');
const li = document.getElementsByTagName('li');

const anchor = Object.values(a);
const list = Object.values(li);

function Makecounter() {
	let count = 0;

	return {
		increese: function() {
			count++;
		},
		getCount: function() {
			return count;
		}
	}
}

function randomColor() {
	const red = Math.floor(Math.random()*255).toString(16);
	const green = Math.floor(Math.random()*255).toString(16);
	const blue = Math.floor(Math.random()*255).toString(16);

	return `#${red}${green}${blue}`;
}

let counter = Makecounter();

anchor.map(item => {
	item.addEventListener('click', (event)=> {
		counter.increese();
		console.log(`Id: ${item.textContent} count: ${counter.getCount()}`);
		item.style.backgroundColor = randomColor();
		event.stopPropagation();
		console.log("I'm not propagating");
	});
});


list.map(item => {
	item.addEventListener('click', ()=> {
		console.log("I'm a list");
	});
});
