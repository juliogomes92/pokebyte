var apiDeMunicipios ="https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

const axios = require('axios')
const rs = require('readline-sync');

var nomeDoMunicipio = rs.question('digite o nome de um minicípio: ').toLowerCase();


axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos/${pesquisa}`)
    .then((resposta) => {
        var municipios = resposta.data;
        console.log(distrito[0]);
    });


        // var nomesDasHabilidades = [];
        // distrito.abilities.forEach((habilidade) => {
        //     nomesDasHabilidades.push(habilidade.ability.name);
        // });
    
        // console.log(nomesDasHabilidades);

