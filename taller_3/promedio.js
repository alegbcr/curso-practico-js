let lista = [
  2, 3, 4, 3, 1, 7, 6, 4, 6, 9, 8, 7, 6, 5, 4, 2, 5, 7, 4, 2, 4, 6, 9, 0, 6, 3,
  2, 5, 8, 0,
];

// Promedio
function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Mediana
function calcularMediana(lista) {
  let listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  console.log(listaOrdenada);
  console.log("segundo print");
  let mediana;
  const mitadLista = parseInt(listaOrdenada.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (esPar(listaOrdenada.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = listaOrdenada[mitadLista];
    return mediana;
  }
}

// Moda
function calcularModa(lista) {
  const listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = listaArray[listaArray.length - 1];
  return moda;
}
