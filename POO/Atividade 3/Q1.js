"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function isItPair(value) {
    if (value % 2 == 0) {
        return "É par";
    }
    else {
        return "É impar";
    }
}
let value = input("Digite um valor: ");
let result = Number(value);
console.log(isItPair(result));
