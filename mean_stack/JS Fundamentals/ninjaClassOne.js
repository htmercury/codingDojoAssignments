var Ninja = function(str) {
    this.name = str;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function() {
        console.log('Name:',this.name +',','Health:',this.health + ',','Speed:',speed +',','Strength:',strength);
    }
}

Ninja.prototype.sayName = function() {
    console.log('My ninja name is',this.name + '!');
}

Ninja.prototype.drinkSake = function () {
    this.health += 10;
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"