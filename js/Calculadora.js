class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    dividir(a, b) {
        if (b === 0) return 'Error'; 
        return a / b;
    }

    multiplicar(a, b) { 
        return a * b;
    }

    raiz(a) {
        if (a < 0) return 'Error'; 
        return Math.sqrt(a);
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    inverso(a) {
        if (a === 0) return 'Error'; 
        return 1 / a;
    }

    logaritmo(a) {
        if (a <= 0) return 'Error'; 
        return Math.log10(a);
    }

    exponencial(a) {
        return Math.exp(a);
    }

    seno(a) {
        return Math.sin(this.toRadians(a));
    }

    coseno(a) {
        return Math.cos(this.toRadians(a));
    }

    tangente(a) {
        return Math.tan(this.toRadians(a));
    }

    
    toRadians(grados) {
        return grados * (Math.PI / 180);
    }
}
