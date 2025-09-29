// variables globales que guardan datos utiles 
let idActual = 1;

// función genérica para capitalizar
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// función para listas separadas por coma
function formatTextType(text) {
  if (Array.isArray(text)) {
    // Si es un array, capitalizamos cada elemento y los unimos con espacio
    return text.map(t => t[0].toUpperCase() + t.slice(1)).join('/');
  } else if (typeof text === 'string') {
    // Si es un string, capitalizamos la primera letra
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else {
    // Por si viene otro tipo de dato
    return text;
  }
}

// función para listas separadas por coma
function formatTextStats(text) {
  if (Array.isArray(text)) {
    // Si es un array, capitalizamos cada elemento y los unimos con espacio
    return text.map(t => t[0].toUpperCase() + t.slice(1)).join('<br>');
  } else if (typeof text === 'string') {
    // Si es un string, capitalizamos la primera letra
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else {
    // Por si viene otro tipo de dato
    return text;
  }
}

// función para buscar pokemon por numero o nombre
function buscarPorInput(){
  const value = document.getElementById("buscar").value

  fetch(`https://pokeapi.co/api/v2/pokemon/${value}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    //Imagen del Pokemon
    const urlImagen = result.sprites.front_default;
    const imgElemento = document.getElementById("img-pokedex");
    imgElemento.src = urlImagen;

    // Nombre del Pokemon
    const nombrePokemon = result.name;
    const nombreH2 = document.getElementById("nombre-pokedex");
    nombreH2.textContent = capitalize(nombrePokemon);
    
    // Tipo del Pokemon
    const tipoPokemon = result.types.map(t => `${t.type.name}`);
    const tipoH3 = document.getElementById("tipo-pokedex");
    tipoH3.textContent = formatTextType(tipoPokemon);
  
    // Id del Pokemon
    idActual = result.id;
    const idH4 = document.getElementById("id-pokedex");
    idH4.textContent = '# ' + idActual + ' - ';

    // Stats del Pokemon
    const statsPokemon = result.stats.map(s => `${s.stat.name}: ${s.base_stat}`);
    const statsH5 = document.getElementById("stats-pokedex");
    statsH5.innerHTML = formatTextStats(statsPokemon);

// limpia el input cuando termina la busqueda
document.getElementById("buscar").value = "";
 
})
  .catch((error) => console.error(error));
};

// función para buscar siguiente pokemon (id)
function siguiente(){
  const idABuscar = idActual +1

  fetch(`https://pokeapi.co/api/v2/pokemon/${idABuscar}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    //Imagen del Pokemon
    const urlImagen = result.sprites.front_default;
    const imgElemento = document.getElementById("img-pokedex");
    imgElemento.src = urlImagen;

    // Nombre del Pokemon
    const nombrePokemon = result.name;
    const nombreH2 = document.getElementById("nombre-pokedex");
    nombreH2.textContent = capitalize(nombrePokemon);
    
    // Tipo del Pokemon
    const tipoPokemon = result.types.map(t => `${t.type.name}`);
    const tipoH3 = document.getElementById("tipo-pokedex");
    tipoH3.textContent = formatTextType(tipoPokemon);
  
    // Id del Pokemon
    const idPokemon = result.id;
    const idH4 = document.getElementById("id-pokedex");
    idH4.textContent = '# ' + idPokemon + ' - ';

    // Stats del Pokemon
    const statsPokemon = result.stats.map(s => `${s.stat.name}: ${s.base_stat}`);
    const statsH5 = document.getElementById("stats-pokedex");
    statsH5.innerHTML = formatTextStats(statsPokemon);

// limpia el input cuando termina la busqueda
document.getElementById("buscar").value = "";

// reinicio la variable idActual
idActual = idPokemon;

})
  .catch((error) => console.error(error));
};

// función para buscar pokemon anterior (id)
function anteriorSiguiente(signo){
  const idABuscar = idActual + signo

  fetch(`https://pokeapi.co/api/v2/pokemon/${idABuscar}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    //Imagen del Pokemon
    const urlImagen = result.sprites.front_default;
    const imgElemento = document.getElementById("img-pokedex");
    imgElemento.src = urlImagen;

    // Nombre del Pokemon
    const nombrePokemon = result.name;
    const nombreH2 = document.getElementById("nombre-pokedex");
    nombreH2.textContent = capitalize(nombrePokemon);
    
    // Tipo del Pokemon
    const tipoPokemon = result.types.map(t => `${t.type.name}`);
    const tipoH3 = document.getElementById("tipo-pokedex");
    tipoH3.textContent = formatTextType(tipoPokemon);
  
    // Id del Pokemon
    const idPokemon = result.id;
    const idH4 = document.getElementById("id-pokedex");
    idH4.textContent = '# ' + idPokemon + ' - ';

    // Stats del Pokemon
    const statsPokemon = result.stats.map(s => `${s.stat.name}: ${s.base_stat}`);
    const statsH5 = document.getElementById("stats-pokedex");
    statsH5.innerHTML = formatTextStats(statsPokemon);

// limpia el input cuando termina la busqueda
document.getElementById("buscar").value = "";

// reinicio la variable idActual
idActual = idPokemon;

})
  .catch((error) => console.error(error));
};


function cambioIMG(){

  fetch(`https://pokeapi.co/api/v2/pokemon/${idActual}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    //Imagen del Pokemon
    const urlImagen = result.sprites.front_shiny;
    const imgElemento = document.getElementById("img-pokedex");
    imgElemento.src = urlImagen;
})
  .catch((error) => console.error(error));
};


