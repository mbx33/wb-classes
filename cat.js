class Cat {
  constructor(name, hunger = 100) {
    this.name = name;
    this.hunger = hunger;
    this.mood = 'happy';
  }

  greet() {
    console.log(`Meow, I'm ${this.name} the cat`);
  }

  graduate() {
    this.name = `Dr. ${this.name}`;
    this.greet();
  }

  feed(calories) {
    this.hunger -= calories;
  }
}

const ezra = new Cat('Ezra');
const auden = new Cat('Auden', 60);

ezra.greet();
auden.greet();
