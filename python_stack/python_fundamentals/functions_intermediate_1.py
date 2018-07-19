import random
def rand_int(min=0, max=100):
    if (min > 0):
        max -= min
    return int(random.random() * max + min)