function isItPair(value: number) {
    if (value % 2 == 0) {
        return "É par";
    } else {
        return "É impar";
    }
}

let result:string = isItPair(10);
console.log(result);
