let saldoTarjeta = document.getElementById('saldoTarjeta');
let saldoSelect = document.getElementById('numTarjetaSaldo');
saldoTarjeta.value = localStorage.getItem('saldoTarjeta');
saldoSelect.value = localStorage.getItem('saldoSelect');

const drawSaldo = () => {
  let digTarjeta = saldoTarjeta.value;
  let selectSaldo = saldoSelect.value;
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${digTarjeta || selectSaldo}`)
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