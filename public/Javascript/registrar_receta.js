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
function anadir_receta() {
    var titulo = document.getElementById("titulo").value;
    var tipo = document.getElementById("tipo").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var instrucciones = document.getElementById("instrucciones").value;
    var foto = document.getElementById("imagen_input").value;
    if (titulo.length === 0 || tipo.length === 0 || ingredientes.length === 0 || instrucciones.length === 0 || foto.length === 0) {
        alert("Porfavor llene todas las casillas solicitadas")
    } else {
        var foto = document.getElementById("imagen_input").files[0].name;
        var dir = "../Media/fotos/" + foto;
        data = {
            titulo: document.getElementById("titulo").value,
            tipo: document.getElementById("tipo").value,
            ingredientes: document.getElementById("ingredientes").value,
            instrucciones: document.getElementById("instrucciones").value,
            idUsuario: localStorage.getItem("idUsuario"),
            foto: dir
        }
        fetch('http://localhost:5000/recetas/insertar', {
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
                    data = {
                        form: document.getElementById("imagen_input")
                    }
                    fetch('http://localhost:5000/recetas/imagen', {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' }

                    })
                        .then(
                            function (response) {
                                return response.json();
                            }
                        )
                }
            )
    }
}