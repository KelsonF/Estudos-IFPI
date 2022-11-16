import { AplicationError } from './Q1'

class ValorInvalidoError extends AplicationError {
    constructor(message: string) {
        super(message);
    }
}

export { ValorInvalidoError }