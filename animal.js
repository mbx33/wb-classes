class Animal {
	constructor(name, species, hunger = 100) {
		this.name = name;
		this.species = species;
		this.hunger = hunger;
	}

	greet() {
		console.log(`Hey, I'm ${this.name} the ${this.species}`);
	}
}

const rover = new Animal("Rover", "dog");
const ezra = new Animal("Ezra", "cat");

rover.greet();
ezra.greet();
