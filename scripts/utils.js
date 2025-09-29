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
