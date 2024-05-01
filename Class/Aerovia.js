import { validate } from "bycontract";

// Sobre cada aerovia é necessário armazenar:
// Identificador (string);
// Aeroporto de origem;
// Aeroporto de destino;
// Tamanho da aerovia (em quilômetros);

// Assumir que as aerovias possuem sentido único.

export class Aerovia {
    #identificador;
    #aeroportoOrigem;
    #aeroportoDestino;
    #tamanho;

    constructor(identificador, aeroportoOrigem, aeroportoDestino, tamanho) {
        validate(arguments, ["string", "string", "string", "number"]);
        if (tamanho <= 0) {
            throw new Error(`Tamanho inválido: ${tamanho}`);
        }
        this.#identificador = identificador;
        this.#aeroportoOrigem = aeroportoOrigem;
        this.#aeroportoDestino = aeroportoDestino;
        this.#tamanho = tamanho;
    }

    get identificador() {
        return this.#identificador;
    }

    get aeroportoOrigem() {
        return this.#aeroportoOrigem;
    }

    get aeroportoDestino() {
        return this.#aeroportoDestino;
    }

    get tamanho() {
        return this.#tamanho;
    }

    toString() {
        let str = `Identificador: ${this.#identificador}; Aeroporto de Origem: ${this.#aeroportoOrigem};`;
        str += ` Aeroporto de Destino: ${this.#aeroportoDestino}; Tamanho: ${this.#tamanho}km;`
        return str;
    }
}