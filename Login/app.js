const frmRegister = document.getElementById("frm-register");
const fullName = document.getElementById("fullName");
const userPhone = document.getElementById("cellphone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const userRegistered = [];
let id = 0;

frmRegister.addEventListener("submit", RegisterUser);

function RegisterUser(event) {

    event.preventDefault();

    id++;

    const user = {
        id: id,
        user: fullName.value,
        Email: email.value,
        pass: password.value,
        confPassword: confirmPassword.value
    };

    if (
        fullName.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
        ) {
            alert("Por favor llene todos los campos");
        }


    else if (password.value != confirmPassword.value) {
        alert("Las contraseñas no coinciden");
    }


    else if (userRegistered.find(user => user.user === fullName.value)) {
        alert("El usuario ya existe");
    }

    else {
        userRegistered.push(user);

        localStorage.setItem("user",JSON.stringify(userRegistered));
        alert("Usuario Registrado Con Exito")
        container.classList.remove("sign-up-mode");

        fullName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
    }   
}