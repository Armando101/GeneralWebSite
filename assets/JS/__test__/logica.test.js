import { Makecounter, randomColor, random } from '../index.js';

describe('Testeamos la función make counter', () => {
	test('¿Aumenta el valor en 1?', () => {
		let counter = Makecounter();
		counter.increese();
		expect(counter.getCount()).toBe(1);
	});

	test('Aumenta el valor en 5', ()=> {
		let counter = Makecounter();
		counter.increese();
		counter.increese();
		counter.increese();
		counter.increese();
		counter.increese();
		expect(counter.getCount()).toBe(5);
	});

	test('No se puede modificar la propiedad count', ()=> {
		let counter = Makecounter();
		counter.increese();
		counter.increese();
		counter.increese();

		expect(counter.count).toBeUndefined();
	});
});

describe('RandomColor testing', ()=> {
	test('Get a random six digits color', ()=> {
		expect(randomColor()).toHaveLength(7);
	});
	test('Get a color with specific pattern', ()=> {
		expect(randomColor()).toMatch(/#[0-9a-f]{6}/);
		expect(randomColor()).toMatch(/#[0-9a-f]{6}/);
		expect(randomColor()).toMatch(/#[0-9a-f]{6}/);
		expect(randomColor()).toMatch(/#[0-9a-f]{6}/);
		expect(randomColor()).toMatch(/#[0-9a-f]{6}/);
	});
});


describe('Testing random function', ()=> {
	test('Return random 2 digits number', ()=> {
		expect(random().length).toBe(2);
	});

	test('Specific pattern', ()=> {
		expect(random()).toMatch(/[0-9a-f]{2}/);
		expect(random()).toMatch(/[0-9a-f]{2}/);
		expect(random()).toMatch(/[0-9a-f]{2}/);
		expect(random()).toMatch(/[0-9a-f]{2}/);
		expect(random()).toMatch(/[0-9a-f]{2}/);
	});
});