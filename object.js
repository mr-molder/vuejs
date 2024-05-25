function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj))          
}

let a = {
    c: undefined,
    num:123,
    s:"asdff",
    arr:["q", "w", "e"],
    b:{
        c:2,
        d:6
    }
}

let b = deepcopy(a)

let c = a

console.log(b)
console.log(c)

a.arr[0] = "err"
a.b.c = 7

console.log(b)
console.log(c)