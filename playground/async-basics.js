console.log('Iniciando app');

setTimeout(() => {
  console.log('Dentro del callback');
}, 2000);

setTimeout(() => {
  console.log('Segundo setTimeout');
}, 0);

console.log('App finalizada.');
