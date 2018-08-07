window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loggedOut.style.display = 'none';
      loggedIn.style.display = 'block';
      document.getElementById('menu').style.display = 'block';
      console.log('User' + JSON.stringify(user));
      const email = firebase.auth().currentUser.email;
      username.innerHTML= email;
    } else {
      loggedOut.style.display = 'block';
      loggedIn.style.display = 'none';
      document.getElementById('menu').style.display = 'none';
    }
  });
};

const register = () => {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
  .then(() => {
    console.log('usuario registrado');
  })
  .catch((error) => {
    console.log('Error firebase' + error.code);
    console.log('Error Firebase' + error.mensaje);
  })
};


const login = () => {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
  .then(() => {
    console.log('Usuario Logeado');
    
  })
  .catch(()=> {
    console.log('Error de firebase' + error.code);
    console.log('Error de firebase' + error.mensaje);
  })
};

const logOut = () => {
  firebase.auth().signOut()
  .then(() => {
    console.log('Usuario deslogeado');
  })
  .catch();
};

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
});

function sendTarjeta() {
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
