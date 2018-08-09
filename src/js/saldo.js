let saldoTarjeta = document.getElementById('saldoTarjeta');
let saldoSelect = document.getElementById('numTarjetaSaldo');
saldoTarjeta.value = localStorage.getItem('saldoTarjeta');
saldoSelect.value = localStorage.getItem('saldoSelect');

const drawSaldo = () => {
  let digTarjeta = saldoTarjeta.value;
  let selectSaldo = saldoSelect.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${digTarjeta || selectSaldo}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NO se cumple Promesa");
    }
  }).then((data) => {
    console.log(data);
    infotarjeta.innerHTML = 'N° Tarjeta : ' + data['id'];
    infosaldo.innerHTML = 'Su saldo es : ' + data['saldoTarjeta'];
    fecha.innerHTML = 'Fecha y Hora : ' + data['fechaSaldo'];
  });
};