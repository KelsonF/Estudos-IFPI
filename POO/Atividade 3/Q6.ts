function exibir(message:string, ...elements:any){
    console.log(message, ...elements);
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");