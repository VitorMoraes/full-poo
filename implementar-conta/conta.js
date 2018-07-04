export class Conta {
    constructor(agencia, numero) {
        // IMUTÁVEIS
        this._agencia = agencia;
        this._numero = numero;
        // MUTÁVEIS
        this._saldo = 500;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo}.00`;
    }
    sacar(valorSaque) {
        if (valorSaque <= this._saldo) {
            this._saldo = (this._saldo - valorSaque);
        }
    }
    depositarEmDinheiro(valorDinheiro) {
        if (valorDinheiro <= 1000) {
            this._saldo += valorDinheiro;
        }
    }
    depositarEmCheque(valorCheque) {
        if (valorCheque <= 10000) {
            this._saldo += valorCheque;
        }
    }
}
