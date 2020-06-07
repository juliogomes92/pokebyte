var url ="https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

const axios = require('axios')
const rs = require('readline-sync');

var pesquisa = rs.question('digite o nome da cidade: ').toLowerCase();

axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos/${pesquisa}`)
    .then((resposta) => {
        const distrito = resposta.data;
        console.log(distrito.nome);
    });


        // var nomesDasHabilidades = [];
        // distrito.abilities.forEach((habilidade) => {
        //     nomesDasHabilidades.push(habilidade.ability.name);
        // });
    
        // console.log(nomesDasHabilidades);

