class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SList:
    def __init__(self, value):
        node = Node(value)
        self.head = node
    def add_node(self, value):
        node = Node(value)
        curr_node = self.head
        while (curr_node.next != None):
            curr_node = curr_node.next
        curr_node.next = node
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
            return self
        else: # either in between or end
            prev_node.next = curr_node.next
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
        if (prev_node == None): #at head
            new_node.next = self.head
            self.head = new_node
            return self
        if (curr_node.next == None and index > curr_index): # at end
            print(curr_node.value, 'test2')
            curr_node.next = new_node
            return self
        else: # in between
            print(curr_node.value, 'test1')
            new_node.next = curr_node
            prev_node.next = new_node
            return self
            

li = SList(7)
# li.add_node(7)
# li.add_node(9)
# li.add_node(1)
# li.remove_node(9) # removes 9, which is one of the middle nodes in the list
# li.remove_node(5) # removes 5, which is the first value in the list
# li.remove_node(1) # removes 1, which is the last node in the list
# li.print_all_values("Attempt 1")
li.insert_Node(2,0)
li.insert_Node(1,6)
li.insert_Node(4,6)
li.insert_Node(5,3)
li.print_all_values("Attempt 2")