class Animal {
	constructor(name, species, hunger = 100) {
		this.name = name;
		this.species = species;
		this.hunger = hunger;
	}

	greet(greeting = "Hi") {
		console.log(`${greeting}, I'm ${this.name} the ${this.species}`);
	}
}

class Cat extends Animal {
	constructor(name, hunger = 100) {
		super(name, "cat", hunger);
	}

	greet() {
		super.greet("Meow");
	}
}

const ezra = new Cat("Ezra");
ezra.greet();
