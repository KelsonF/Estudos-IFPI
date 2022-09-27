import {input} from '../../ultilidades/io_utils'

function isItPair(value: number) {
    if (value % 2 == 0) {
        return "É par";
    } else {
        return "É impar";
    }
}

let value: number = input();
let result:string = isItPair(value);
console.log(result);
