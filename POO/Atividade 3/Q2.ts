function prime_number(value: number) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        } else {
            return true;
        }
    }

}

let resultado : boolean | any = prime_number(10);
console.log(resultado);
