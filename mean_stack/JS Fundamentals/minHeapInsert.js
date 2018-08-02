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
}

let test = new MinHeap();
test.arr = [undefined, 3, 8, 10, 11, 9, 20, 14];
console.log('result:',test.insert(7));