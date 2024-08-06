class Display {
    constructor(valorAnterior, valorActual) {
        this.valorAnterior = valorAnterior;
        this.valorActual = valorActual;
        this.calculadora = new Calculadora();
        this.valorActualTexto = '';
        this.valorAnteriorTexto = '';
        this.operacion = undefined;
    }

    borrarTodo() {
        this.valorActualTexto = '';
        this.valorAnteriorTexto = '';
        this.operacion = undefined;
        this.actualizarPantalla(); 
    }

    borrar() {
        this.valorActualTexto = this.valorActualTexto.slice(0, -1);
        this.actualizarPantalla();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActualTexto.includes('.')) return;
        this.valorActualTexto += numero;
        this.actualizarPantalla();
    }

    seleccionarOperacion(operacion) {
        if (this.valorActualTexto === '') return;
        if (this.valorAnteriorTexto !== '') {
            this.computar();
        }
        this.operacion = operacion;
        this.valorAnteriorTexto = this.valorActualTexto;
        this.valorActualTexto = '';
        this.actualizarPantalla();
    }

    computar() {
        let resultado;
        const valorAnterior = parseFloat(this.valorAnteriorTexto);
        const valorActual = parseFloat(this.valorActualTexto);

        if (isNaN(valorAnterior) || isNaN(valorActual)) return;

        switch (this.operacion) {
            case 'sumar':
                resultado = this.calculadora.sumar(valorAnterior, valorActual);
                break;
            case 'restar':
                resultado = this.calculadora.restar(valorAnterior, valorActual);
                break;
            case 'multiplicar':
                resultado = this.calculadora.multiplicar(valorAnterior, valorActual);
                break;
            case 'dividir':
                resultado = this.calculadora.dividir(valorAnterior, valorActual);
                break;
            case 'raiz':
                resultado = this.calculadora.raiz(valorActual);
                break;
            case 'potencia':
                resultado = this.calculadora.potencia(valorAnterior, valorActual);
                break;
            case 'inverso':
                resultado = this.calculadora.inverso(valorActual);
                break;
            case 'log':
                resultado = this.calculadora.logaritmo(valorActual);
                break;
            case 'exp':
                resultado = this.calculadora.exponencial(valorActual);
                break;
            case 'seno':
                resultado = this.calculadora.seno(valorActual);
                break;
            case 'coseno':
                resultado = this.calculadora.coseno(valorActual);
                break;
            case 'tangente':
                resultado = this.calculadora.tangente(valorActual);
                break;
            default:
                return;
        }

        this.valorActualTexto = resultado.toString();
        this.operacion = undefined;
        this.valorAnteriorTexto = '';
        this.actualizarPantalla();
    }

    actualizarPantalla() {
        this.valorAnterior.innerText = this.valorAnteriorTexto;
        this.valorActual.innerText = this.valorActualTexto;
    }
}
