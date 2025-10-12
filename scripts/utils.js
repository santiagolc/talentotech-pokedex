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

// funcion para mostrar un pokemon
function mostrarPokemon(valorURL, idEtiqueta, descripcion){
  fetch(`https://pokeapi.co/api/v2/pokemon/${valorURL}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    // Imagen del Pokemon
    const urlImagen = result.sprites.front_default;
    const imgElemento = document.getElementById(`img-${idEtiqueta}`);
    imgElemento.src = urlImagen;

    // Nombre del Pokemon
    const nombrePokemon = result.name;
    const nombreH2 = document.getElementById(`nombre-${idEtiqueta}`);
    nombreH2.textContent = capitalize(nombrePokemon);
    
    // Tipo del Pokemon
    const tipoPokemon = result.types.map(t => `${t.type.name}`);
    const tipoH3 = document.getElementById(`tipo-${idEtiqueta}`);
    tipoH3.textContent = formatTextType(tipoPokemon);
  
    // Id del Pokemon
    idActual = result.id;
    const idH4 = document.getElementById(`id-${idEtiqueta}`);
    idH4.textContent = '# ' + idActual + ' - ';

    // Stats del Pokemon
    const statsPokemon = result.stats.map(s => `${s.stat.name}: ${s.base_stat}`);
    const statsH5 = document.getElementById(`stats-${idEtiqueta}`);
    statsH5.innerHTML = formatTextStats(statsPokemon);

})
  .catch((error) => console.error(error));

}

// funcion para ver la descripcion de la pokedex
function mostrarDescripcion(idEtiqueta){
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${idActual}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    let textos = result.flavor_text_entries.filter(entry => entry.language.name === "es");

    const descripcion = textos[0];
    const descripcionElemento = document.getElementById(`descripcion-${idEtiqueta}`);
    descripcionElemento.innerHTML = descripcion;
})
  .catch((error) => console.error(error));
};

// función para buscar pokemon por numero o nombre
function buscarPorInput(){
  const value = document.getElementById("buscar").value
  mostrarPokemon(value, "pokedex")

  // limpia el input cuando termina la busqueda
document.getElementById("buscar").value = ""
 
};

// función para buscar pokemon siguiente/anterior (id)
function anteriorSiguiente(signo){
  const idABuscar = idActual + signo
  mostrarPokemon(idABuscar, "pokedex")
  
// limpia el input cuando termina la busqueda
document.getElementById("buscar").value = "";

// reinicio la variable idActual
idActual = idPokemon;

};

// función para cambiar la imagen de un pokemon de default a shiny
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

// funcion para obtener un Id diario y mostrarlo en la pagina principal
function getDailyPokemonId() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const storedDate = localStorage.getItem("pokemonDate");
  let id = localStorage.getItem("pokemonId");

  if (storedDate !== today || !id) {
    // Si no hay un ID guardado o es de otro día → genera uno nuevo
    id = Math.floor(Math.random() * 1010) + 1;
    localStorage.setItem("pokemonId", id);
    localStorage.setItem("pokemonDate", today);
  }

  return id;
};
