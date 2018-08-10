window.calculate = (resultBip) =>{
  console.log(resultBip);
  const saldo = 800;
  const tarifa = 760;
  if (saldo - tarifa === 40) {
    return true;
  } else {
    return false;
  };
};

window.validateTarjet = (newTarjeta) => {
  console.log(newTarjeta);
  if (newTarjeta.toString().length <= 8) {
    if (isNaN(newTarjeta) == false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  };
};