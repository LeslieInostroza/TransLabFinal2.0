window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('Sectionlogin').style.display ='none';
      document.getElementById('menu').style.display = 'block';
      console.log('User' + JSON.stringify(user));
      const email = firebase.auth().currentUser.email;
      username.innerHTML= email;
    } else {
      document.getElementById('Sectionlogin').style.display ='block';
      document.getElementById('menu').style.display = 'none';
    }
  });
};