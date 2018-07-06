class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

class DList:
    def __init__(self, value):
        node = Node(value)
        self.head = node
        self.tail = node
    def add_node(self, value):
        node = Node(value)
        curr_node = self.tail
        curr_node.next = node
        node.previous = curr_node
        self.tail = node
    def print_all_values(self, msg=""):
        curr_node = self.head          # create a curr_node     
        print("\n\nhead points to ", id(self.head))
        print("Printing the values in the list ---", msg,"---")
        while (curr_node.next != None):
            print(id(curr_node), curr_node.value, id(curr_node.next))
            curr_node = curr_node.next        
        print(id(curr_node), curr_node.value, id(curr_node.next))
    def remove_node(self, val):
        curr_node = self.head
        prev_node = None
        while (curr_node != None and curr_node.value != val):
            prev_node = curr_node
            curr_node = curr_node.next
        if (curr_node == None): #no match
            return self
        if (prev_node == None): #at head
            self.head = curr_node.next
            if (curr_node.next == None):
                self.tail = curr_node.next
            return self
        if (curr_node.next == None): # at end
            prev_node.next = curr_node.next
            self.tail = prev_node
            return self
        else: # in between
            prev_node.next = curr_node.next
            curr_node.next.previous = prev_node
            return self
    def insert_Node(self, val, index):
        new_node = Node(val)
        curr_index = 0
        curr_node = self.head
        prev_node = None
        while (curr_node.next != None and curr_index < index):
            prev_node = curr_node
            curr_node = curr_node.next
            curr_index += 1
        if (prev_node == None): # at head
            new_node.next = self.head
            self.head = new_node
            if (curr_node.next == None):
                self.tail = new_node
            return self
        if (curr_node.next == None and index > curr_index): # at end
            curr_node.next = new_node
            return self
        else: # in between
            new_node.next = curr_node
            curr_node.previous = new_node
            prev_node.next = new_node
            new_node.previous = prev_node
            return self
            

li = DList(5)
li.add_node(7)
li.add_node(9)
li.add_node(1)
li.remove_node(9) # removes 9, which is one of the middle nodes in the list
li.remove_node(5) # removes 5, which is the first value in the list
li.remove_node(1) # removes 1, which is the last node in the list
li.print_all_values("Attempt 1")
li.insert_Node(2,0)
li.insert_Node(1,6)
li.insert_Node(4,6)
li.insert_Node(5,3)
li.print_all_values("Attempt 2")