const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
let mensaje ;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateName(name){
    return name !=="";
}

function validateEmail(email) {
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();

    let mensaje = "";

    if (!name) {
        mensaje += "El nombre es obligatorio\n";
    }

    if (!email) {
        mensaje += "El correo es obligatorio\n";
    } else if (!validateEmail(email)) {
        mensaje += "Ingrese un correo válido\n";
    }

    if (!password) {
        mensaje += "La contraseña es obligatoria\n";
    } else if (!validatePassword(password)) {
        mensaje += "La contraseña debe tener mínimo 8 caracteres\n";
    }   

    if (mensaje !== "") {
        alert(mensaje);
        return;
    }

    alert("Registro exitoso.");
    form.reset();
});