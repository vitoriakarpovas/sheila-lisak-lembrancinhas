const fs = require('fs');

// Page

const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body')

signupBtn.onclick = function() {
  formBx.classList.add('active');
  body.classList.add('active');
}

signinBtn.onclick = function() {
  formBx.classList.remove('active');
  body.classList.remove('active');
}

// Login

const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const Confirm = document.querySelector(".swal-button .swal-button--confirm");

BtnLog.addEventListener("click", (e) => {
  e.preventDefault();
  const username = formlog.username.value;
  const password = formlog.password.value;

  const usuarioscad = fs.readFileSync('./database/usuarios.json')
  const usuariosparse = JSON.parse(usuarioscad)

  for (var umUsuario of usuariosparse) {
    if (username === umUsuario.nome && password === umUsuario.senha) {
      swal({
        icon: 'success',
        text: `Seja Bem-Vindo(a) ${username}\nRedirecionando...`,
        position: 'top-end',
        buttons: false,
        timer: 5000
      })
      setTimeout(() => {
        location.href = "./../index.html"
      }, 5000)
    } else {
      swal({
        title: 'Erro!',
        text: 'Tentativa de Login Falhou!',
        icon: 'error'
      })
    }
  }
})