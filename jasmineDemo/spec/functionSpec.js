function reverseArray(arr){ 
    for(var i=0; i<arr.length/2; i++) { 
        temp = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = arr[i]; 
        arr[i] = temp; 
    } 
    return arr; 
} 
b = reverseArray([1,2,3]); 
console.log('b is', b); 
    
describe("reverseArray", function() { 
    it("should return [5,3,1] when [1,3,5] is passed", function() { 
        expect(reverseArray([1,3,5])).toEqual([5,3,1]); 
    }); 
    it("should return [2,4,8,1] when [1,8,4,2] is passed", function() { 
        expect(reverseArray([2,4,8,1])).toEqual([1,8,4,2]); 
    }); 
});
