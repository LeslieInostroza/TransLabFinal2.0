const navMenu = () => {
  if (side.className.indexOf("menuClosed") >= 0) { 
    openNavMenu();  
  } else {
    closeNavMenu(); 
  }
}
const openNavMenu = () => {
  side.classList.remove('menuClosed'); 
  side.classList.add('menuOpen');
}

const closeNavMenu = () => {
  side.classList.add('menuClosed'); 
  side.classList.remove('menuOpen');
}

const showMenu = () => {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('saldo').style.display = 'none';
  document.getElementById('calculo').style.display='none';
  document.getElementById('preguntas').style.display = 'none';
}
const showProfile = () => {
  document.getElementById('perfil').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('saldo').style.display = 'none';
  document.getElementById('calculo').style.display='none';
  document.getElementById('preguntas').style.display = 'none';
}

const showSaldo = () => {
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('saldo').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('perfil').style.display = 'none'
  document.getElementById('calculo').style.display='none';
  document.getElementById('preguntas').style.display = 'none';
}

const showCalculo = () => {
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('calculo').style.display='block';
  document.getElementById('menu').style.display='none';
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('saldo').style.display = 'none';
  document.getElementById('preguntas').style.display = 'none';
}

const showPreguntas = () => {
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('preguntas').style.display = 'block';
  document.getElementById('calculo').style.display='none';
  document.getElementById('menu').style.display='none';
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('saldo').style.display = 'none';
}