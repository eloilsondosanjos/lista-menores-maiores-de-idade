
export const agrupaPorMenoresMaioresIdade = pessoas => (

pessoas.reduce((valorAcumulador, valorCorrenteArray) => {
  const propMenorMaior = valorCorrenteArray.idade >=18 ? 'maiores' : 'menores';

  valorAcumulador[propMenorMaior].push(valorCorrenteArray);

  return valorAcumulador;

}, { maiores:[], menores:[]})
)