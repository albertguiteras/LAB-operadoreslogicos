let nacionalidad = prompt('¿De dónde es el ganador?');
let comida = prompt('¿Qué come el ganador?');

if (
   (nacionalidad === 'valenciano' && comida === 'galletas') ||
   (nacionalidad === 'francés' && comida === 'yogur') ||
   (nacionalidad !== 'chino' && comida === 'fideos')
) {
   alert('¡Felicidades! Le damos el primer premio.');
} else {
   alert('Lo siento, no cumple las condiciones para el premio.');
}
