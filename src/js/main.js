window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('Sectionlogin').style.display ='none';
      document.getElementById('menu').style.display = 'block';
      document.getElementById('headerMenu').style.display = 'block';
      console.log('User' + JSON.stringify(user));
      const email = firebase.auth().currentUser.email;
      username.innerHTML= email;
    } else {
      document.getElementById('Sectionlogin').style.display ='block';
      document.getElementById('menu').style.display = 'none';
      document.getElementById('headerMenu').style.display = 'none';
      document.getElementById('preguntas').style.display = 'none';
    }
  });
  document.getElementById('btnsaldotarjeta').addEventListener('click', drawSaldo);
};