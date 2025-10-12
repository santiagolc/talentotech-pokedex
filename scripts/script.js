const requestOptions = {
  method: "GET",
  redirect: "follow"
};

// Muestra el pokemon del dia
mostrarPokemon(getDailyPokemonId(), "pokemon-del-dia")

// Muestra la descipcion del pokemon
console.log(mostrarDescripcion("pokemon-del-dia"))

// Muestra el primer pokemon de la pokedex
mostrarPokemon(idActual, "pokedex")

// busqueda por numero o nombre
document.getElementById("submit").addEventListener("click", buscarPorInput);
document.getElementById("buscar").addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        buscarPorInput();
    }
});

// busqueda por boton siguiente o anterior
document.getElementById("siguiente").addEventListener("click", () => anteriorSiguiente(1));
document.getElementById("anterior").addEventListener("click", () => anteriorSiguiente(-1));

// cambiar el pokmon a shiny
document.getElementById("shiny").addEventListener("click", cambioIMG);

