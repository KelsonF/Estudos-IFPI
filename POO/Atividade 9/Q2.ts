abstract class ClasseAbstrata {
  abstract imprimaAlgo(): void;
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo(): void {
        
    }
}

// É necessário que a ClasseConcreta implemente o metodo que foi colocado na ClasseAbstrata