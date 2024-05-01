# :pushpin: Instruções:
É necessário ter o Node.js instalado; \
**Requisitos de Teste:** No terminal, acessar a pasta do projeto e instalar as dependências (npm install) e executar (node index.js);

---

# :page_with_curl: Introdução:
No Brasil, nenhum avião decola sem um plano de voo aprovado. Planos de voo especificam que aeronave irá utilizar quais rotas e aerovias para voar de um ponto a outro do país. Dessa forma, garante-se a segurança dos voos, evitando-se que as aeronaves se choquem no ar.

O objetivo geral deste trabalho é criar um sistema que auxilie os pilotos na montagem de seus planos de voo. Para tanto, o sistema deve ser capaz de listar as rotas disponíveis para o deslocamento de um ponto a outro em uma determinada data e horário, além de ser capaz de validar os planos de voo submetidos pelos pilotos. O detalhamento deste contexto, bem como dos requisitos do sistema encontra-se no documento complementar (arquivo “Especificação_Projeto_POO.pdf”).

Um ponto importante neste projeto é que você aplicará os conteúdos da disciplina para modelar um sistema complexo, utilizando os conceitos de orientação a objetos e implementando a modelagem proposta usando linguagem de programação JavaScript. Entre os conceitos de programação orientada a objetos que devem ser observados, cita-se: encapsulamento e herança.

Durante a avaliação, serão seguidos os critérios abaixo:

- Códigos que não estejam em JavaScript ou estejam com erros de sintaxe não serão avaliados.
- O programa deve atender aos itens especificados.
- O código de programa deve estar organizado, ser legível e estar comentado.
- Os conceitos de orientação a objetos devem ser seguidos.

## Fase 01:

Nesta fase, você trabalhará na modelagem da solução e implementação das classes fundamentais a partir da análise do documento complementar (arquivo “Especificação_Projeto_POO.pdf”).

Nesta etapa, teremos os entregáveis:

1. **Implementação das seguintes classes:**  
    :pushpin: Piloto  
    :pushpin: ServicoPilotos (capaz de recuperar as informações relativas aos pilotos que podem ser responsáveis pelos voos)  
    :pushpin: Hierarquia de classes de Aeronaves  
    :pushpin: ServicoAeronaves (capaz de recuperar as informações sobre as aeronaves que podem ser utilizadas nos planos de voo)  
    :pushpin: Aerovia  
    :pushpin: ServicoAerovias (capaz de recuperar as informações sobre as aerovias disponíveis para os voos)  
- *Exemplo de uso: um programa JavaScript capaz de demonstrar que as classes desenvolvidas funcionam adequadamente.*

Nesta etapa os dados relativos a pilotos, aeronaves e aerovias não precisam, necessariamente, estar armazenados em arquivos texto, podendo estar codificados como coleções diretamente dentro das classes dos cadastros.
