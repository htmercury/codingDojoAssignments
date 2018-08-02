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

    heapify() {
        if (this.arr[0] != undefined) {
            this.arr.push(this.arr[0]);
            this.arr[0] = undefined;
        }
        let i = Math.trunc(this.arr.length - 1);
        while (i != 0) {
            console.log(this.arr);
            let childOne = i * 2;
            let childTwo = i * 2 + 1;
            if (this.arr[childOne] < this.arr[i]) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[childOne];
                this.arr[childOne] = temp;
            }
            else if (this.arr[childTwo] < this.arr[i]) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[childTwo];
                this.arr[childTwo] = temp;
            }
            else {
                i--;
            }
        }
    }
}

let test = new MinHeap();
test.arr = [20, 3, 8, 14, 9, 6, 2];
test.heapify();