function test(name,age,num){
    return {
        name : name,
        age : age,
        num : num

    }
}


let x = test("kishan",25,12);
console.log(x);



let obj = {
    name : "Kishan",
    age : 25,
    num : 12,
    obj : {
        req : "one",
        ram : 16
    },
    arr : [1,2,3,99]
};

let y = JSON.parse(JSON.stringify(obj));

let z = {...obj};

obj.obj.req = "two";
obj.arr[3] = 100;

console.log(obj);
console.log(y);
console.log(z);

let arr = [1,2,3,4];
let n = JSON.parse(JSON.stringify(arr));
let c = [...arr];
arr[3] +=5;
console.log(n);
console.log(c);
