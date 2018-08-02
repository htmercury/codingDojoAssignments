class MinHeap {
    constructor() {
        this.arr = [];
    }
    
    insert(val) {
        if (this.arr.length < 2) {
            this.arr[0] = undefined;
            this.arr[1] = val;
        }
        else {
            this.arr.push(val);
            let parent = Math.trunc((this.arr.length - 1)/2);
            let child = this.arr.length - 1;
            while(this.arr[child] < this.arr[parent]) {
                let temp = this.arr[child];
                this.arr[child] = this.arr[parent];
                this.arr[parent] = temp;
                child = parent;
                parent = Math.trunc(child/2);
            }
        }
    }

    remove() {
        let temp = this.arr[1];
        this.arr[1] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;
        let result = this.arr.pop();
        let parent = 1;
        let childOne = parent * 2;
        let childTwo = parent * 2 + 1;
        while (this.arr[parent] > this.arr[childOne] || this.arr[parent] > this.arr[childTwo]) {
            if (this.arr[parent] > this.arr[childOne]) {
                temp = this.arr[parent];
                this.arr[parent] = this.arr[childOne];
                this.arr[childOne] = temp;
                parent = childOne;
                childOne = parent * 2;
                childTwo = parent * 2 + 1;
            }
            else {
                temp = this.arr[parent];
                this.arr[parent] = this.arr[childTwo];
                this.arr[childTwo] = temp;
                parent = childTwo;
                childOne = parent * 2;
                childTwo = parent * 2 + 1;
            }
        }
        return result;
    }
}

let test = new MinHeap();
test.arr = [undefined, 3, 12, 8, 17, 13, 15, 10];
test.remove(3);