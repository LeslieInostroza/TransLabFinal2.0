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
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
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


