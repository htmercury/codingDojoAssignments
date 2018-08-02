class Ninja {
    constructor(str) {
        this.name = str;
        this.health = 100;
        this._speed = 3;
        this._strength = 3;
    }

    showStats() {
        console.log('Name:',this.name +',','Health:',this.health + ',','Speed:',this._speed +',','Strength:',this._strength);
    }
    sayName() {
        console.log('My ninja name is',this.name + '!');
    }
    drinkSake() {
        this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

class Sensei extends Ninja {
    constructor(str) {
        super(str);
        this.health = 200;
        this._speed = 10;
        this._strength = 10;
        this._wisdom = 10;
    }

    showStats() {
        super.showStats();
    }

    speakWisdom() {
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
