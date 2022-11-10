class AplicationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class SaldoInsuficiente extends AplicationError {
  constructor(message: string) {
    super(message);
  }
}

class ContaInexistenteError extends AplicationError{
  constructor(message: string) {
    super(message);
  }
}

export { AplicationError, SaldoInsuficiente, ContaInexistenteError }