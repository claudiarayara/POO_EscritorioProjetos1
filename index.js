import * as ServPilotos from "./Class/ServicoPilotos.js";
import * as ServAeronaves from "./Class/ServicoAeronaves.js";
import * as ServAerovias from "./Class/ServicoAerovias.js";

// Programação Orientada a Objeto - Escritório de Projetos: Fase 01
// Aluno: Claudia Rayara Alves da Silva

// Sistema de Controle de Tráfego Aéreo
// Necessário: 
    // Node.js instalado;

// Requisitos de Teste: No terminal, acessar a pasta do projeto. Instalar as dependências (npm install) e executar (node index.js);

// Classes: "Piloto" e "ServicoPilotos"
console.log("Pilotos Cadastrados: Matricula, Nome e Status da Habilitação:\n");
let testePilotos = new ServPilotos.ServicoPilotos("./Banco de Dados/Pilotos.csv");
console.log(testePilotos.listaTodos());

// Informação sobre a busca de números de matricula
// Altere a informação ente "aspas" para resultado diferente;
console.log(testePilotos.recuperaInfo("P001")); 
console.log(testePilotos.recuperaInfo("P123")); 

// Lista os pilotos com habilitação ativa
console.log("\nPilotos com Habilitação Ativa:\n");
console.log(testePilotos.pilotosAtivos());

// Classes: "Aerovia" e "ServicoAerovias"
console.log("\nAerovias:\n");
let testeAerovias = new ServAerovias.ServicoAerovias("./Banco de Dados/Aerovias.csv");
console.log(testeAerovias.listaTodas());

// Informação sobre aerovia correspondente após buscar por aeroportos específicos
//Altere a informação ente "aspas" para resultado diferente;
console.log(testeAerovias.recuperaInfo("POA","CGH"));
console.log(testeAerovias.recuperaInfo("CGH","POA"));

// Classes: "Aeronave" e ServicoAeronave"
console.log("\nAeronaves:\n");
let testeAeronaves = new ServAeronaves.ServicoAeronaves("./Banco de Dados/Aeronaves.csv");
console.log(testeAeronaves.listaTodas());