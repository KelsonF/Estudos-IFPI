"use strict";
function greetings(name, pronoun) {
    if (pronoun === null) {
        pronoun = "Sr";
        console.log(`Hello ${pronoun}. ${name} !!`);
    }
    else {
        console.log(`Hello ${pronoun}. ${name}`);
    }
}
function main() {
    let resultado = greetings("Mr.", "Ely");
    console.log(resultado);
}
