class Hero {
	#powerCount = 10;

	constructor(name) {
		this.name = name;
	}

	// getCurrentPowerCount() {
	// 	return this.#powerCount;
	// }
	get getCurrentPowerCount() {
		return this.#powerCount;
	}

	train() {
		// this.#powerCount + 1;
		this.#powerCount++;
	}
}

let heroCount = 0;

const heroes = [];

let hero = gethero("hulk");
let geralt = gethero("geralt");

heroes.push(hero);
heroes.push(geralt);

print_hall_of_fame();
// powinniśmy sie trzymać notacji camelCase - 'printHallOfFame()'


function gethero() {
	heroCount++;
	let hero = new Hero("hulk");
}



const print_hall_of_fame = () => {
	//camelCase
	let spiderman = gethero('spider');
	//camelCase
	heroes.push(spiderman);

	const heroesContainer = document.querySelector("#div");

	// brak selektora o id "div" - document.querySelector("div")

	heroes.map((x, i, arr) => {
		// zbędne parametry i, arr - nie są nigdzie używane
		const heroElement = document.createElement("div");
		const [name] = x;
		// destrukturyzacja - const { name } = x 

		heroElement.innerHTML = `<p>${name}</p><p>${x.GetCurrentPowerCoun}</p>`;


		heroesContainer.append(heroElement);
	});
};
