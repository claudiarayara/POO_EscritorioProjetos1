import { validate } from "bycontract";

// AERONAVES
// As aeronaves são identificadas por um prefixo (uma string).

// Serão considerados 3 tipos de aeronave:

// 1. Aeronave particular de pequeno porte;
// Nome da empresa responsável pela manutenção;
// Só podem voar entre 25.000 pés e 27.000 pés;

// 2. Aeronave comercial de passageiros;
// Quantidade de passageiros que pode transportar;
// Só podem voar acima de 28.000 pés;

// 3. Aeronave comercial de carga.
// Peso máximo em toneladas que é capaz  de levar;
// Só podem voar entre 00:00 e as 06h00 am;

// Sobre qualquer aeronave é necessário armazenar:
// Prefixo;
// Tipo de aeronave;
// Velocidade de cruzeiro (quilômetro por hora);
// Autonomia (em quilômetros);

// Sobre qualquer aeronave de comercial é necessário armazenar:
// Nome da companhia aérea;

class Aeronave {
    #prefixo;
    #tipo;
    #velocidadeCruzeiro;
    #autonomia;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
        validate(arguments, ["string", "string", "number", "number"]);
        if (velocidadeCruzeiro <= 0) {
            throw new Error(`Velocidade inválida: ${velocidadeCruzeiro}`);
        } else if (autonomia <= 0) {
            throw new Error(`Autonomia inválida: ${autonomia}`);
        }
        this.#prefixo = prefixo;
        this.#tipo = tipo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }

    get prefixo() {
        return this.#prefixo;
    }

    get tipo() {
        return this.#tipo;
    }

    get velocidadeCruzeiro() {
        return this.#velocidadeCruzeiro;
    }

    get autonomia() {
        return this.#autonomia;
    }

    toString() {
        let str = `Prefixo: ${this.prefixo}; Tipo: ${this.tipo}; `;
        str += `Velocidade de cruzeiro: ${this.velocidadeCruzeiro}km/h; `;
        str += `Autonomia: ${this.autonomia}km;`;
        return str;
    }

}

// 1. Aeronave particular de pequeno porte;
// Nome da empresa responsável pela manutenção;

export class AeronavePequenoPorte extends Aeronave {
    #empresaManutencao;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, empresaManutencao) {
        validate(arguments, ["string", "string", "number", "number", "string"]);
        super(prefixo, tipo, velocidadeCruzeiro, autonomia);
        this.#empresaManutencao = empresaManutencao;
    }

    get empresaManutencao() {
        return this.#empresaManutencao;
    }

    toString() {
        return (super.toString() +
            ` Responsável pela manutenção: ${this.#empresaManutencao};`);
    }
}

// Sobre qualquer aeronave de comercial é necessário armazenar:
// Nome da companhia aérea;

class AeronaveComercial extends Aeronave {
    #nomeCiaAerea;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea) {
        validate(arguments, ["string", "string", "number", "number", "string"]);
        super(prefixo, tipo, velocidadeCruzeiro, autonomia);
        this.#nomeCiaAerea = nomeCiaAerea;
    }

    get nomeCiaAerea() {
        return this.#nomeCiaAerea;
    }

    toString() {
        return (super.toString() +
            ` Companhia Aérea: ${this.#nomeCiaAerea};`);
    }
}

// 2. Aeronave comercial de passageiros;
// Quantidade de passageiros que pode transportar;

export class AeronaveComercialPassageiros extends AeronaveComercial {
    #maxPassageiros;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea, maxPassageiros) {
        validate(arguments, ["string", "string", "number", "number", "string", "number"]);
        if (maxPassageiros <= 0) {
            throw new Error(`Quantidade inválida: ${maxPassageiros}`);
        }
        super(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea);
        this.#maxPassageiros = maxPassageiros;
    }

    get maxPassageiros() {
        return this.#maxPassageiros;
    }

    toString() {
        return (super.toString() +
            ` Quantidade máxima de passageiros: ${this.#maxPassageiros};`);
    }
}

// 3. Aeronave comercial de carga.
// Peso máximo em toneladas que é capaz  de levar;

export class AeronaveComercialCarga extends AeronaveComercial {
    #pesoMax;

    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea, pesoMax) {
        validate(arguments, ["string", "string", "number", "number", "string", "number"]);
        if (pesoMax <= 0) {
            throw new Error(`Peso inválido: ${pesoMax}`);
        }
        super(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea);
        this.#pesoMax = pesoMax;
    }

    get pesoMax() {
        return this.#pesoMax;
    }

    toString() {
        return (super.toString() +
            ` Carga máxima: ${this.#pesoMax}kg;`);
    }
}