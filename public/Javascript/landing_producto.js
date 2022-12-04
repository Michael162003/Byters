const image_input = document.querySelector("#imagen_input");
var uploaded_image = "";
image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#mostrar-imagen").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
});

function anadir() {
    data = {
        correo: document.getElementById("email-registro").value,
        nombre: document.getElementById("nombre").value,
        fecha: document.getElementById("fecha").value,
        genero: document.getElementById("genero").value,
        altura: document.getElementById("altura").value,
        peso: document.getElementById("peso").value,
        foto: document.getElementById("imagen_input").value
    }
    fetch('http://localhost:5000/landing-producto/insertar', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                localStorage.setItem("idUsuario", json[0]._id)
                for (var i = 0; i < json.length; i++) {
                    console.log(json)
                }
                console.log(localStorage.getItem("idUsuario"))
            }
        )
        .then(
            document.getElementById("registrar").onclick = function () {
                location.href = "../HTML/landing_producto.html";
            }
        )
}

function ingresar() {
    data = {
        correo: document.getElementById("email-inicio").value
    }
    fetch('http://localhost:5000/landing-producto/buscar', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                localStorage.setItem("idUsuario", json[0]._id)
                for (var i = 0; i < json.length; i++) {
                    console.log(json)
                }
                console.log(localStorage.getItem("idUsuario"))
            }
        )
        .then(
            document.getElementById("iniciar").onclick = function () {
                location.href = "../HTML/ayuno.html";
            }
        )
}
