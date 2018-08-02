class location {
    constructor(name) {
        this.character = name;
    }
}

var Heffalumps = new location('Heffalumps');
var Eeyore = new location('Eeyore');
var Kanga = new location('Kanga');
var Owl = new location('Owl');
var ChristopherRobin = new location('Christopher Robin');
var Rabbit = new location('Rabbit');
var Gopher = new location('Gopher');
var Piglet = new location('Piglet');
var WinnieThePooh = new location('Winnie The Pooh');
var Bees = new location('Bees');
var Tigger = new location('Tigger');

Heffalumps.west = Eeyore;
Eeyore.east = Heffalumps;
Eeyore.south = Kanga;
Kanga.noth = Eeyore;
Kanga.south = ChristopherRobin;
ChristopherRobin.north = Kanga;
ChristopherRobin.west = Owl;
ChristopherRobin.east = Rabbit;
ChristopherRobin.south = WinnieThePooh;
Owl.east = ChristopherRobin;
Owl.south = Piglet;
Rabbit.west = ChristopherRobin;
Rabbit.east = Gopher;
Rabbit.south = Bees;
WinnieThePooh.north = ChristopherRobin;
WinnieThePooh.west = Piglet;
WinnieThePooh.east = Bees;
WinnieThePooh.south = Tigger;
Piglet.north = Owl;
Piglet.east = WinnieThePooh;
Bees.north = Rabbit;
Bees.west = WinnieThePooh;
Gopher.west = Rabbit;
Tigger.north = WinnieThePooh;