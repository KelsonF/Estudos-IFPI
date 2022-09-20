var Person = /** @class */ (function () {
    function Person(name, payment, language) {
        this.name = name;
        this.payment = payment;
        this.language = language;
    }
    Person.prototype.output = function () {
        console.log("\n            ".concat(this.name, " \n            My payment time is ").concat(this.payment, "\n            and\n            my preffered language is ").concat(this.language, "\n        "));
    };
    return Person;
}());
function main() {
    var professor_ely = new Person("Ely", 120.56, "TypeScript");
    var question_answer = professor_ely.output();
    console.log(question_answer);
}
main();
