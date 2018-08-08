let calculoTarjeta = document.getElementById('tarjetNum');
let selectTarjeta = document.getElementById('numTarjeta');
calculoTarjeta.value = localStorage.getItem('calculoTarjeta');
selectTarjeta.value = localStorage.getItem('selectTarjeta');

const drawCalculate = () => {
 let calculoCard = calculoTarjeta.value;
 let selectCard = selectTarjeta.value;
 fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${calculoCard || selectCard}`)
 .then((response) => {
   if (response.ok){
     return response.json();
   } else {
    throw new Error('no cumple promesa');
   }
 }).then((data) => {
   console.log(data);
   finalCalculo.innerHTML = ''+ data['Saldo  tarjeta'];
   
 });
};