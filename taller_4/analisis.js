const salariosCR = costaRica.map(function (persona) {
  return persona.salary;
});

const salariosCRSorted = salariosCR.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

// Promedio
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Mediana de Salarios
function calcularMedianaSalarios(lista) {
  let mediana;
  const mitad = parseInt(lista.length / 2);

  // Helper
  function esPar(numero) {
    return numero % 2 === 0;
  }

  if (esPar(lista.length)) {
    const elemento1 = lista[mitad - 1];
    const elemento2 = lista[mitad];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = lista[mitad];
    return mediana;
  }
}

// Calcular la mediana general
const medianaGeneralCR = calcularMedianaSalarios(salariosCRSorted);

// Porcentaje
(120 * 85) / 100;

// Mediana Top 10%
const spliceStart = (salariosCRSorted.length * 90) / 100;
const spliceCount = salariosCRSorted.length - spliceStart;
const salarioCRTop10 = salariosCRSorted.splice(spliceStart, spliceCount);

const medianaTop10CR = calcularMedianaSalarios(salarioCRTop10);
