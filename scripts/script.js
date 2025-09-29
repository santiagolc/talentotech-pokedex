const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://pokeapi.co/api/v2/pokemon/charizard", requestOptions)
  .then((response) => response.json())
  .then((result) => {

    //Imagen del Pokemon
    // URL de la imagen que obtendrías de la API
    const urlImagen = result.sprites.front_default;

    // Buscamos la etiqueta <img> por su id
    const imgElemento = document.getElementById("img-pokedex");

    // Actualizamos el atributo 'src' con la URL de la API
    imgElemento.src = urlImagen;

    // Nombre del Pokemon
    const nombrePokemon = result.name;
    const nombreH2 = document.getElementById("nombre-pokedex");
    // nombreH2.textContent = nombrePokemon;
    nombreH2.textContent = capitalize(nombrePokemon);
    

    // Tipo del Pokemon
    const tipoPokemon = result.types.map(t => `${t.type.name}`);
    const tipoH3 = document.getElementById("tipo-pokedex");
    // console.log(tipoPokemon, typeof tipoPokemon)
    tipoH3.textContent = formatTextType(tipoPokemon);
    

    // Id del Pokemon
    const idPokemon = result.id;
    const idH4 = document.getElementById("id-pokedex");
    idH4.textContent = '# ' + idPokemon + ' - ';

    // Stats del Pokemon
    const statsPokemon = result.stats.map(s => `${s.stat.name}: ${s.base_stat}`);
    const statsH5 = document.getElementById("stats-pokedex");
    // console.log(statsPokemon, typeof statsPokemon)
    // statsH5.textContent = statsPokemon;
    statsH5.innerHTML = formatTextStats(statsPokemon);
;
  })
  .catch((error) => console.error(error));