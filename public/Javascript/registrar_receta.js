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
    data = {
        titulo: document.getElementById("titulo").value,
        tipo: document.getElementById("tipo").value,
        ingredientes: document.getElementById("ingredientes").value,
        instrucciones: document.getElementById("instrucciones").value,
        idUsuario: localStorage.getItem("idUsuario"),
        foto: document.getElementById("imagen_input").value
    }
    fetch('http://localhost:5000/recetas/insertar',  {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(
        function(response) {
            return response.json();
        }
    )
}