// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento =
//   (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

/* Calculadora de Descuentos */
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = parseInt(inputPrice.value);

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseInt(inputDiscount.valuez);

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  // Escribir en el HTML
  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerHTML = `El precio con descuento es: $${precioConDescuento}`;
}

/* Aplicador de Cupones */
const coupons = ["Renegado", "aquel_que_vive", "sin_miedo"];

function onClickButtonCoupon() {
  const inputPrice = document.getElementById("InputPriceCoupon");
  const priceValue = parseInt(inputPrice.value);

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  // if (!coupons.includes(userCouponValue)) {
  //   alert(`El cupón ${couponValue} no es válido`);
  // }

  let descuento;

  switch (couponValue) {
    case "Renegado":
      descuento = 15;
      break;

    case "aquel_que_vive":
      descuento = 20;
      break;

    case "sin_miedo":
      descuento = 30;
      break;
    default:
      alert(`El cupón ${couponValue} no es válido`);
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultPrice = document.getElementById("ResultCoupon");
  resultPrice.innerHTML = `El total a pagar es $${precioConDescuento}`;
}
