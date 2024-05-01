import { validate } from "bycontract";
import nReadlines from "n-readlines";

import * as Pilotos from "./Piloto.js";

// ServicoPilotos (+recupera(matricula : string) : Piloto)
// A classe "ServicoPilotos" possui relação com a classe "Piloto".

// Serve para pegar todas as informações sobre os pilotos que já existem e cria um objeto Piloto para cada registro de piloto encontrado.
// Depois, guarda todos esses pilotos em um array. 
// Método para mostrar na tela todos os pilotos existentes;
// Método para listar apenas aqueles que estão aptos a pilotar voos (com habilitação ativa);
// Método que recupera um piloto específico com base na matrícula fornecida;

export class ServicoPilotos {
    #pilotos;

    constructor(nomeArquivo) {
        validate(nomeArquivo, "string");
        this.#pilotos = [];
        this.carregaDados(nomeArquivo);
    }

    carregaDados(nomeArquivo) {
        validate(nomeArquivo, "string");
        let arq = new nReadlines(nomeArquivo);
        let buf = "";
        let line = "";
        let dados = "";


        arq.next();

        while (buf = arq.next()) {
            line = buf.toString('utf8');
            dados = line.split(",");
            let numeroMatricula = dados[0];
            let nome = dados[1];
            let habilitacaoAtiva = dados[2].trim().toLowerCase() === 'true';
            let piloto = new Pilotos.Piloto(numeroMatricula, nome, habilitacaoAtiva);
            this.#pilotos.push(piloto);
        }
    }

    get pilotosCadastrados() {
        return this.#pilotos.values();
    }

    listaTodos() {
        for (let pessoa of this.pilotosCadastrados) {
            console.log(`  > ${pessoa.toString()}`);
        }
    }

    pilotosAtivos() {
        let resultado = [];
        for (let pessoa of this.pilotosCadastrados) {
            if (pessoa.habilitacaoAtiva) {
                resultado.push(pessoa.toString());
            }
        }
        if (resultado.length >= 1) {
            return resultado;
        } else {
            return `Não há pilotos com habilitação ativa!`;
        }
    }

    recuperaInfo(matricula) {
        validate(matricula, "string");
        let resultado = [];
        for (let pessoa of this.pilotosCadastrados) {
            if (matricula == pessoa.numeroMatricula) {
                resultado.push(pessoa.toString());
            }
        }
        if (resultado.length >= 1) {
            console.log(`Pilotos com número de marícula ${matricula}:`);
            return resultado;
        } else {
            return `Número de matrícula não encontrado: ${matricula}`;
        }
    }
}