let nacionalidad = prompt('¿De dónde es el ganador?');
let comida = prompt('¿Qué come el ganador?');

if (
   (nacionalidad === 'valenciano' && comida === 'galletas') ||
   (nacionalidad === 'francés' && comida === 'yogur') ||
   (nacionalidad !== 'chino' && comida === 'fideos')
) {
   alert('¡Felicidades!');
} else {
   alert('Lo siento, no cumple las condiciones.');
}
