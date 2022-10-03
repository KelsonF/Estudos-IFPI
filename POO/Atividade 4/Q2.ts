class Hotel {
    quantReservas: number;

    constructor(quantReervas:number){
        this.quantReservas = quantReervas;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);