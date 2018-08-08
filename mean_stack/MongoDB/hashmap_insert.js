let hashMap = [];
hashMap.length = 30;

String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash &= hash;
    }
    return hash;
}

let hashedKey = "role".hashCode();

function mod(input, div) {
    return (input % div + div) % div;
}

let idx = mod(hashedKey, hashMap.length);

function insert(key, val) {
    let hasKey = key.hashCode();
    let idx = mod(hashedKey, hashMap.length);
    hashMap[idx] = [key, val];
    return hashMap;
}

function lookUp(key) {
    let hasKey = key.hashCode();
    let idx = mod(hashedKey, hashMap.length);
    return hashMap[idx][1];
}