function cargar_recetas() {
    data = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/recetas/buscar', {
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
                var listado = document.getElementById("receta-personalizada");
                for(var cont = 0; cont < json.length; cont++) {
                    var linea = "<div class='comida'><img class='fotos' src='" + json[cont].foto +"'><h1 class='estilo-nombres'>" + json[cont].titulo + "</h1></div><div class='texto'><p class='estilo-texto'><i class='fa-solid fa-bowl-food'></i> TIPO DE RECETA: " + json[cont].tipo +"<br><br><i class='fa-solid fa-carrot'></i> INGREDIENTES: <br><br>" + json[cont].ingredientes + "<br><br>PROCEDIMIENTO: <br><br>" + json[cont].instrucciones + "</p></div>"
                    listado.insertAdjacentHTML("beforeend", linea);
                }
            }
    )
}

