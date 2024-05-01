import { validate } from "bycontract";
import nReadlines from "n-readlines";

import * as Aerovias from "./Aerovia.js";

// ServicoAerovias (+recupera(origem : String, destino : String) : Array<Aerovia>)
// A classe "ServicoAerovias" possui relação com a classe "Aeronave".

// ServicoAerovias pega todas as informações sobre as aerovias que já existem e cria um objeto Aerovia para cada conjunto de dados de aerovia lido. 
//Em seguida, guarda todas essas aerovias em um array. 
// Mostra na tela todas as aerovias disponíveis;
// Recupera uma aerovia específica com base nos dados do aeroporto de origem e destino fornecidos;

export class ServicoAerovias {
    #aerovias;

    constructor(nomeArquivo) {
        validate(nomeArquivo, "string");
        this.#aerovias = [];
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
            let identificador = dados[0];
            let aeroportoOrigem = dados[1];
            let aeroportoDestino = dados[2];
            let tamanho = Number(parseInt(dados[3]));
            let aerovia = new Aerovias.Aerovia(identificador, aeroportoOrigem, aeroportoDestino, tamanho);
            this.#aerovias.push(aerovia);
        }
    }

    get aeroviasDisponiveis() {
        return this.#aerovias.values();
    }

    listaTodas() {
        for (let via of this.aeroviasDisponiveis) {
            console.log(`  > ${via.toString()}`);
        }
    }

    recuperaInfo(origem, destino) {
        validate(arguments, ["string", "string"]);
        let resultado = [];
        for (let via of this.aeroviasDisponiveis) {
            if (origem == via.aeroportoOrigem && destino == via.aeroportoDestino) {
                resultado.push(via.toString());
            }
        }
        if (resultado.length >= 1) {
            console.log(`Aerovias com Origem em ${origem} e Destino em ${destino}:`);
            return resultado;
        } else {
            return `Siglas de aeroportos inválidas: ${origem}, ${destino}`;
        }
    }
}