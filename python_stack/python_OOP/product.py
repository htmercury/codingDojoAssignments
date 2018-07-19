class product:
    def __init__(self, p, i, w, b, s='for sale'):
        self.price = p
        self.item_name = i
        self.weight = w
        self.brand = b
        self.status = s
    def sell(self):
        self.status = 'sold'
        return self
    def add_tax(self, tax):
        return self.price * (1+tax)
    def return_item(self, reason_for_return):
        if reason_for_return == 'defective':
            self.status = reason_for_return
            self.price = 0
        if reason_for_return == 'like_new':
            self.status = 'for sale'
        if reason_for_return == 'opened':
            self.status = 'used'
            self.price *= 0.8
        return self