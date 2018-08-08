const sendTarjeta = ()=> {
  const currentUser = firebase.auth().currentUser;
  let bip = agregarTarjeta.value;
  agregarTarjeta.value ='';

  const newTarjetaKey = firebase.database().ref().child(`tarjeta`).push().key;
  firebase.database().ref(`tarjeta/${newTarjetaKey}`).set({
    creator : currentUser.uid,
    creatorName : currentUser.email,
    text : bip
  });
}

firebase.database().ref('tarjeta')
.limitToLast(10)
.once('value')
.then((tarjeta) => {
  console.log("tarjetas" + JSON.stringify(tarjeta));
});

firebase.database().ref('tarjeta')
.limitToLast(10)
.on('child_added', (newTarjeta)=> {
  nTarjeta.innerHTML+=`
  <p>${newTarjeta.val().text} </p>`;

  numTarjeta.innerHTML+=`
  <select>
  <option>${newTarjeta.val().text}</option>
  </select>`;

  numTarjetaSaldo.innerHTML+=`
  <select>
  <option>${newTarjeta.val().text}</option>
  </select>`;
});