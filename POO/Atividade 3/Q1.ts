import promptSync from "prompt-sync";
const input = promptSync();

function isItPair(value: number) {
    if (value % 2 == 0) {
        return "É par";
    } else {
        return "É impar";
    }
}

let value = input("");
let result = Number(value)
isItPair(result);
