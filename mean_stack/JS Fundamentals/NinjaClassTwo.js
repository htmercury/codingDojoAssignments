var Ninja = function (str) {
    this.name = str;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function () {
        console.log('Name:',this.name +',','Health:',this.health + ',','Speed:',speed +',','Strength:',strength);
    }
    this.kick = function (other) {
        let dmg = 15 * strength;
        other.health -= dmg;
        console.log(other.name, 'was kicked by', this.name, 'and lost', dmg, 'Health!');
    }
}

Ninja.prototype.sayName = function () {
    console.log('My ninja name is', this.name + '!');
}

Ninja.prototype.drinkSake = function () {
    this.health += 10;
}

Ninja.prototype.punch = function (other) {
    if (other instanceof Ninja) {
        other.health -= 5;
        console.log(other.name, 'was punched by', this.name, 'and lost 5 Health!');
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);