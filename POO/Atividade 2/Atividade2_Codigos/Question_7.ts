class Person{
    name : string;
    payment : number;
    language : string;

    constructor(name: string, payment: number, language: string){
        this.name = name;
        this.payment = payment;
        this.language = language;
    }

    output(){
        console.log(`
            ${this.name} 
            My payment time is ${this.payment}
            and
            my preffered language is ${this.language}
        `);
    }
}

function main() : void{
    let professor_ely : Person = new Person("Ely", 120.56, "TypeScript");
    let question_answer = professor_ely.output();

    console.log(question_answer);
}

main()