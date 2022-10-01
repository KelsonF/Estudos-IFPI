"use strict";
function exibir(message, ...elements) {
    console.log(message, ...elements);
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
