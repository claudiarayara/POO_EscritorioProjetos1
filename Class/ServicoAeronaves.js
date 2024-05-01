import { validate } from "bycontract";
import nReadlines from "n-readlines";

import * as Aeronaves from "./Aeronave.js";

// ServicoAeronaves (+todas() : Array<Aeronave>)
// A classe "ServicoAeronaves" possui relação com a classe "Aeronave".

// A classe ServicoAerovanes pega todas as informações sobre as aeronaves que já existem e cria um objeto para cada tipo diferente de aeronave.
//Depois, coloca todas essas aeronaves num monte (ou array). 
//E, por fim, tem uma função que mostra na tela todas as aeronaves que estão disponíveis.

export class ServicoAeronaves {
    #aeronaves;

    constructor(nomeArquivo) {
        validate(nomeArquivo, "string");
        this.#aeronaves = [];
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
            let prefixo = dados[0];
            let tipo = dados[1];
            let velocidadeCruzeiro = Number(parseInt(dados[2]));
            let autonomia = Number(parseInt(dados[3]));
            let empresaManutencao = dados[4];
            let nomeCiaAerea = dados[5];
            let maxPassageiros = Number(parseInt(dados[6]));
            let pesoMax = Number(parseInt(dados[7]));
            switch (tipo) {
                case 'PEQ':
                    let aviaoPeqPorte = new Aeronaves.AeronavePequenoPorte(prefixo, tipo, velocidadeCruzeiro, autonomia, empresaManutencao);
                    this.#aeronaves.push(aviaoPeqPorte);
                    break;
                case 'PAS':
                    let aviaoPassageiros = new Aeronaves.AeronaveComercialPassageiros(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea, maxPassageiros);
                    this.#aeronaves.push(aviaoPassageiros);
                    break;
                case 'CAR':
                    let aviaoCarga = new Aeronaves.AeronaveComercialCarga(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCiaAerea, pesoMax);
                    this.#aeronaves.push(aviaoCarga);
                    break;
                default:
                    throw new Error('Elemento invalido');
            }
        }
    }

    get aeronavesDisponiveis() {
        return this.#aeronaves.values();
    }

    listaTodas() {
        for (let aviao of this.aeronavesDisponiveis) {
            console.log(`  > ${aviao.toString()}`);
        }
    }
}