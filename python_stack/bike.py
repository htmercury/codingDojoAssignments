class bike:
    def __init__(self, p, ms, mi = 0):
        self.price = p
        self.max_speed = ms
        self.miles = mi
    def displayInfo(self):
        print(f'price: {self.price}\nmax speed: {self.max_speed}\ntotal miles: {self.miles}')
        return self
    def ride(self):
        print('Riding')
        self.miles += 10
        return self
    def reverse(self):
        print('Reversing')
        if self.miles >=5:
            self.miles -= 5
        return self

first_bike = bike(100, 5)
first_bike.ride().ride().ride().reverse().displayInfo()
second_bike = bike(75, 2)
second_bike.ride().ride().reverse().reverse().displayInfo()
third_bike = bike(25, 6)
third_bike.reverse().reverse().reverse().displayInfo()