const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filter = array.filter((number:number) => number % 2 == 0);
console.table(filter);