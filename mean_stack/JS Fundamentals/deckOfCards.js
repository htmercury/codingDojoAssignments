class Card {
    constructor(suit, strValue, numValue) {
        this.suit = suit;
        this.name = strValue;
        this.value = numValue;
    }

    show() {
        console.log(`Suit: ${this.suit}\nName: ${this.name}\nValue: ${this.value}`)
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.reset()
    }

    reset() {
        let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        let names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        for (let suit of suits) {
            for (let i = 0; i < names.length; i++) {
                this.deck.push(new Card(suit, names[i], i + 1));
            }
        }
    }

    // Fisher–Yates Shuffle
    shuffle() {
        let m = this.deck.length, t, i;
        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
    }

    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.deck = new Deck();
        this.deck.shuffle();
        for (let i = 0; i < 5; i ++) {
            this.hand.push(this.deck.deal());
        }
    }

    discard(card) {
        let newHand = [];
        for (let c of this.hand) {
            if (card != c) {
                newHand.push(c);
            }
        }
        console.log(newHand);
        this.hand = newHand;
    }
}

let test = new Deck();

test.shuffle();
