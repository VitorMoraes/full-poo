export class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        // IMUTÀVEIS
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        // MUTAVEIS
        this._on = false;
        this._off = !this._on; // aqui tanto this.on quanto this._on funcionou.
        this._velocity = 0;
        this._rpm = 0;
    }

    get on() {
        return this._on;
    }

    get off() {
        return this._off;
    }

    get watts() {
        return this._watts;
    }

    get brand() {
        return this._brand;
    }

    get velocity() {
        return this._velocity;
    }

    get rpm() {
        return this._rpm;
    }

    get minRPM() {
        return this._minRPM;
    }

    get maxRPM() {
        return this._maxRPM;
    }

    configRPM() {
        if (this._velocity === 0) this._rpm = 0;
        if (this._velocity === 1) this._rpm = this._minRPM;
        if (this._velocity === 2) {
            this._rpm = ((this._minRPM + this._maxRPM)/2);
        }
        if (this._velocity === 3) this._rpm = this._maxRPM;
    }

    speedUp() {
        if (this._velocity === 0) {
            this._on = ! this._on;
            this._off = ! this._off;
        }
        if (this._velocity < 3) {
            this._velocity++;
        }
        this.configRPM();
    }

    slowDown() {
        if (this._velocity === 1) {
            this._on = ! this._on, this._off = ! this._off;
        }
        if (this._velocity > 0) {
            this._velocity--;
        }
        this.configRPM();
    }

    turnOff() {
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this.configRPM();
    }
}
