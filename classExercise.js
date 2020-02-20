class Animal {
    constructor(name, age, type, size) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.size = size;
        this.isEaten = false;
    }

    eat(animal) {
        if (animal instanceof Animal && this.type === "herbivore") {
            console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
        }
        else if (animal instanceof Animal && animal.size * 2 > this.size) {
            console.log(`The animal ${this.name} tries to eat the ${animal.name} but it was too`)
        }
        else if (animal instanceof Animal && this.type !== "herbivore") {
            animal.isEaten = true;
            console.log(`The animal ${this.name} ate the animal ${animal.name} `)
        }

    }

}

let lion = new Animal("Abbey", 5, "carnivore", 8);
let deer = new Animal("Rocky", 8, "herbivore", 4);
let mouse = new Animal("Gordon", 6, "omnivore", 2);
