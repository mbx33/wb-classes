class Robot {
	constructor(name, model, purpose) {
		this.name = name;
		this.model = model;
		this.purpose = purpose;
		this.isPoweredOn = false;
	}

	togglePower() {
		this.isPoweredOn = !this.isPoweredOn;
	}
}

class BattleDroid extends Robot {
	constructor(name, model, purpose, weapon, hp = 150) {
		super(name, model, purpose);
		this.weapon = weapon;
		this.hp = hp;
	}

	upgradeWeapon(newWeapon) {
		this.weapon = newWeapon;
	}

	attackEnemy(target) {
		if (this.isPoweredOn) {
			console.log(`${this.name} attacks ${target} with ${this.weapon}`);
		} else {
			console.log(`${this.name} is powered off`);
		}
	}
}

class HealingDroid extends Robot {
	constructor(name, model, purpose, tools, hp = 60) {
		super(name, model, purpose);
		this.tools = tools;
		this.hp = hp;
	}

	healTarget(target, amount) {
		if (this.isPoweredOn) {
			const tool = this.tools[Math.floor(Math.random() * this.tools.length)];
			console.log(`${this.name} heals ${target} ${amount} hp with ${tool}`);
		} else {
			console.log(`${this.name} is powered off`);
		}
	}
}

const terminator = new BattleDroid("Terminator", "T-90", "Combat", "Fists");

const heale = new HealingDroid("Heal-E", "H-2000", "Heal", [
	"Medkit",
	"Syringe",
	"Batteries",
	"Oil",
]);

heale.togglePower();
heale.healTarget("Mark", 50);
