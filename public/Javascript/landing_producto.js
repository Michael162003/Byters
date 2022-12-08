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

function anadir2() {
    var foto = document.getElementById("imagen_input").files[0].name;
    console.log(foto)
    var x = "hola";
    console.log(x)
}
function anadir() {
    var correo = document.getElementById("email-registro").value;
    var nombre = document.getElementById("nombre").value;
    var fecha_nacimiento = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var foto = document.getElementById("imagen_input").files[0].name;
    var dir = "../Media/fotos/" + foto;
    if(correo.length === 0 || nombre.length === 0 || fecha_nacimiento.length === 0 || genero.length === 0 || altura.length === 0 || peso.length === 0 || foto.length === 0){
        alert("Porfavor llene todos los espacios");
    } else {
        data = {
            correo: document.getElementById("email-registro").value,
            nombre: document.getElementById("nombre").value,
            fecha_nacimiento: document.getElementById("fecha").value,
            genero: document.getElementById("genero").value,
            altura: document.getElementById("altura").value,
            peso: document.getElementById("peso").value,
            foto: dir
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
                alert("La cuenta se registro exitosamente")
            )

    }

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
