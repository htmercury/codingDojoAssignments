class Animal:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def display_health(self):
        print(self.health)
        return self
animal_1 = Animal('dino', 100)
animal_1.walk().walk().walk().run().run().display_health()

class Dog(Animal):
    def __init__(self, name, health = 150):
        super().__init__(name, health)
    def pet(self):
        self.health += 5
        return self

dog_1 = Dog('bob', 20)
dog_1.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):
    def __init__(self, name, health = 170):
        super().__init__(name, health)
    def fly(self):
        self.health += 10
        return self
    def display_health(self):
        super().display_health()
        print('I am a Dragon')

new_animal = Animal('not a Dragon', 100)
#new_animal.pet()
#new_animal.fly()
new_animal.display_health()