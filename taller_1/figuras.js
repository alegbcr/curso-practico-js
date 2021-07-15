// Códifgo del cuadrado
// console.group('cuadrados');
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);


// function perimetroCuadrado(lado){
//   return lado * 4
// } 
// // console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`);

// function areaCuadrado(lado){
//   return lado * lado
// }
// console.log(`El área del cuadrado es ${areaCuadrado}cmˆ2`);
// console.groupEnd();




// Códifgo del triángulo
// console.group('triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triángulo miden ${ladoTriangulo1}cm + ${ladoTriangulo2}cm + ${baseTriangulo}cm`);
// const alturaTriangulo = 5.5
// console.log(`La altura del triangulo es ${alturaTriangulo}cm`);

// function perimetroTriangulo(lado1, lado2, base){
//   return lado1 + lado2 + base
// }
// // console.log(`El perímetro del triangulo es ${perimetroTriangulo}cm`);

// function areaTriangulo(base, altura){
//   return (base * altura) / 2
// }
// console.log(`El área del triangulo es ${areaTriangulo}cmˆ2`);
// console.groupEnd()





// Códifgo del circulo
// console.group('circulos');
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`);

// function diametroCirculo(radio){
//   return radio * 2
// }
// console.log(`El diametro del circulo es ${diametroCirculo}cm`);

// const PI = Math.PI;
// console.log(`El PI del circulo es ${PI}`);

// function perimetroCirculo(radio){
//   const diametro = diametroCirculo(radio);
//   return diametro * PI
// } 
// console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);

// function areaCirculo(radio){
//   return (radio * radio) * PI
// }
// console.log(`El área del circulo es ${areaCirculo}cmˆ2`);
// console.groupEnd()



// Aqui interactuamos con JS

// Cuadrado
function perimetroCuadrado(lado){
  return lado * 4
} 

function areaCuadrado(lado){
  return lado * lado
}

function calcularPerimetroCuadrado(){
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
  return (base * altura) / 2
}

function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById('InputLado1');
  const valorLado1 = parseInt(lado1.value);
  const lado2 = document.getElementById('InputLado2');
  const valorLado2 = parseInt(lado2.value);
  const base = document.getElementById('InputBase');
  const valorBase = parseInt(base.value);

  const perimetro = perimetroTriangulo(valorLado1, valorLado2, valorBase);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const base = document.getElementById('InputBaseArea');
  const valorBase = parseInt(base.value);
  const altura = document.getElementById('InputAltura');
  const valorAltura = parseInt(altura.value);

  const area = areaTriangulo(valorBase, valorAltura)
  alert(area)
}


// Circulo
function diametroCirculo(radio){
  return radio * 2
}

const PI = Math.PI;

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI
} 

function areaCirculo(radio){
  return (radio * radio) * PI
}

function calcularDiametroCirculo(){
  const radio = document.getElementById('InputRadio');
  const valorRadio = radio.value;
  
  const diametro = diametroCirculo(valorRadio);
  alert(diametro)
}

function calcularPerimetroCirculo(){
  const radio = document.getElementById('InputRadio');
  const valorRadio = radio.value;
  
  const perimetro = perimetroCirculo(valorRadio);
  alert(perimetro)
}

function calcularAreaCirculo(){
  const radio = document.getElementById('InputRadio');
  const valorRadio = radio.value;

  const area = areaCirculo(valorRadio);
  alert(area);
}
