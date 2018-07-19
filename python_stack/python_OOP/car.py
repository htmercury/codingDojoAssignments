class car:
    def __init__(self, p, s, f, m):
        if p > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.price = p
        self.speed = s
        self.fuel = f
        self.mileage = m
        self.display_all()
    def display_all(self):
        print(f'Price: {self.price}\nSpeed: {self.speed}mph\nFuel: {self.fuel}\n'\
            f'Milage: {self.mileage}mpg\nTax: {self.tax}')

car_1 = car(2000, 5, 'Full', 15)
car_2 = car(2000, 5, 'Not Full', 105)
car_3 = car(2000, 15, 'Kind of Full', 95)
car_4 = car(2000, 25, 'Full', 25)
car_5 = car(2000, 45, 'Empty', 25)
car_6 = car(20000000, 35, 'Empty', 15)