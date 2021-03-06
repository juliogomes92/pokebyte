

var pokemons;
var poke_imagens = {};

document.addEventListener("DOMContentLoaded", function () {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=251").then((response) => {
    var pokemons = response.data.results;
    pokemons.forEach((poke) => {
      var split = poke.url.split("/");
      var numero = split[split.length - 2];
      var url =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
        numero.padStart(3, "0") +
        ".png";
      poke_imagens[poke.name] = url;
    });
    console.log(poke_imagens);
  });
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, { data: poke_imagens });
});

function selecionarPokemon() {
  var input = document.querySelector("#autocomplete-input");
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    .then((response) => {
      var pokemon = response.data.name;
      document.querySelector("#nomePokemon").innerHTML = pokemon.toUpperCase();
      var lista = document.querySelector("#listaHabilidades");
      var habilidades = response.data.abilities.map(
        (ab) => `<p>${ab.ability.name}</p>`
      );
      lista.innerHTML = habilidades.join("");
      var imagem = poke_imagens[pokemon];
      document.querySelector("#pokeImage").src = imagem;
      var tipos = response.data.types.map(t => t.type.name);
      document.querySelector("#tipoDoPokemon").innerHTML = tipos.join(', ');

    });
}
