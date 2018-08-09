let calculoTarjeta = document.getElementById('tarjetNum');
let selectTarjeta = document.getElementById('numTarjeta');
calculoTarjeta.value = localStorage.getItem('calculoTarjeta');
selectTarjeta.value = localStorage.getItem('selectTarjeta');

const drawSelect = () => {
  let selectSaldo = document.getElementById('SelecTarifa');
  let selectValor = selectSaldo[selectSaldo.selectedIndex].value;
  valorSaldo.innerHTML = '$' + selectValor;
}

const drawCalculate = () => {
 let calculoCard = calculoTarjeta.value;
 let selectCard = selectTarjeta.value;
 fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${calculoCard || selectCard}`)
 .then(response => response.json()
).then( data => {
   console.log(data);
   const expression = /(\d+)/g;
   const dataBip = data.saldoTarjeta.match(expression);
   const dataFinalBip = parseInt(dataBip[0] + dataBip[1]);
   const SelecTarifa = document.getElementById('SelecTarifa').value;
   const finalCalculate = dataFinalBip - SelecTarifa;
   
   finalCalculo.innerHTML = '$' + finalCalculate;  
  });
};