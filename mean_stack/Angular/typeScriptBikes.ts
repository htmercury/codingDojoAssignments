class Bike {
    miles: number;
    constructor(public price: number, public max_speed: number) { this.miles = 0 }

    displayInfo = () => {
        console.log('price:', this.price);
        console.log('speed:', this.max_speed);
        console.log('miles:', this.miles);
    }

    ride = () => {
        this.miles += 10;
        console.log('Riding');
        return this;
    }

    reverse = () => {
        if (this.miles >= 5) {
            this.miles -= 5;
        }
        console.log('Reversing');
        return this;
    }
}

let firstBike: Bike;
firstBike = new Bike(5, 10);
firstBike.ride().ride().ride().reverse().displayInfo();

let secondBike: Bike;
secondBike = new Bike(5, 10);
secondBike.ride().ride().reverse().reverse().displayInfo();

let thirdBike: Bike;
thirdBike = new Bike(5, 10);
thirdBike.reverse().reverse().reverse().displayInfo();