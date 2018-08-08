let saldoTarjeta = document.getElementById('saldoTarjeta');
saldoTarjeta.value = localStorage.getItem('saldoTarjeta');

const drawSaldo = () => {
  let digTarjeta = saldoTarjeta.value;
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${digTarjeta}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NO se cumple Promesa");
    }
  }).then((data) => {
    console.log(data);
    infotarjeta.innerHTML = 'N° Tarjeta : ' + data['N&ordm; tarjeta bip! '];
    infosaldo.innerHTML = 'Su saldo es : ' + data['Saldo  tarjeta'];
    fecha.innerHTML = 'Fecha y Hora : ' + data['Fecha saldo'];
  });
};