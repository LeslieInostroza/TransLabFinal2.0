const btnsaldotarjeta = document.getElementById('btnsaldotarjeta');
let saldoTarjeta = document.getElementById('saldoTarjeta');
saldoTarjeta.value = localStorage.getItem('saldoTarjeta');

btnsaldotarjeta.addEventListener('click', () => {
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
    document.getElementById('infotarjeta').innerHTML = 'N° Tarjeta : ' + data['N&ordm; tarjeta bip! '];
    document.getElementById('infosaldo').innerHTML = 'Su saldo es : ' + data['Saldo  tarjeta'];
    document.getElementById('fecha').innerHTML = 'Fecha y Hora : ' + data['Fecha saldo'];
  });
});