
// Movimientos - animaciones

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


//

const userName = document.getElementById("userName");
const pass = document.getElementById("Password");
const frmLogin = document.getElementById("frm-Login");

frmLogin.addEventListener('submit', LoginUser);

function LoginUser(event) {
  event.preventDefault();
  const getLocal = localStorage.getItem("user");
  const validateUser = JSON.parse(getLocal);

  if (userName.value === "" || Password.value === "") {
    alert("Por favor llene todos los campos");
  }

  else if (!validateUser.find(user => user.user === userName.value)) {
    alert("El usuario no existe");
  }

  else if (
    validateUser.find(user => user.user === userName.value).pass !== pass.value){
    alert("La contraseña no coincide");
  }
  else {
    alert("Usuario logueado con éxito");
    window.location.href = "../mercancia/mercancia.html";
  }  
  
}

