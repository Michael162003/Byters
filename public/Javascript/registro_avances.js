function cargar_tabla() {
    data = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/calendario/buscar-registros', {
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
                var listado = document.getElementById("tabla-calendario");
                for (var cont = 0; cont < json.length; cont++) {
                    var peso = json[cont].pesoDia;
                    var tipo = json[cont].horas_ayuno;
                    if(peso === null && tipo === null) {
                        var linea = "<tr class='tipografia-registro'><td>" + json[cont].fecha + "</td><td>" + " " + "</td><td>" + json[cont].hora_comienzo + "</td><td>" + json[cont].hora_fin + "</td><td>" + " " + "</td><td>" + json[cont].tipo_ejercicio + "</td><td>" + json[cont].duracion + "</td><td><a href='registro_avances.html?id=" + json[cont]._id + "#formulario-actualizar' class='a-tabla'>Editar</a></td></tr>"
                        listado.insertAdjacentHTML("beforeend", linea)
                    } else  if (peso === null && tipo !== null){
                        var linea = "<tr class='tipografia-registro'><td>" + json[cont].fecha + "</td><td>" + json[cont].pesoDia + "Kg</td><td>" + json[cont].hora_comienzo + "</td><td>" + json[cont].hora_fin + "</td><td>" + " " + "</td><td>" + json[cont].tipo_ejercicio + "</td><td>" + json[cont].duracion + "</td><td><a href='registro_avances.html?id=" + json[cont]._id + "#formulario-actualizar' class='a-tabla'>Editar</a></td></tr>"
                        listado.insertAdjacentHTML("beforeend", linea)
                    } else if (peso !== null && tipo === null) {
                        var linea = "<tr class='tipografia-registro'><td>" + json[cont].fecha + "</td><td>" + " " + "</td><td>" + json[cont].hora_comienzo + "</td><td>" + json[cont].hora_fin + "</td><td>" + json[cont].horas_ayuno + "</td><td>" + json[cont].tipo_ejercicio + "</td><td>" + json[cont].duracion + "</td><td><a href='registro_avances.html?id=" + json[cont]._id + "#formulario-actualizar' class='a-tabla'>Editar</a></td></tr>"
                        listado.insertAdjacentHTML("beforeend", linea)
                    } else {
                        var linea = "<tr class='tipografia-registro'><td>" + json[cont].fecha + "</td><td>" + json[cont].pesoDia + "Kg</td><td>" + json[cont].hora_comienzo + "</td><td>" + json[cont].hora_fin + "</td><td>" + json[cont].horas_ayuno + "</td><td>" + json[cont].tipo_ejercicio + "</td><td>" + json[cont].duracion + "</td><td><a href='registro_avances.html?id=" + json[cont]._id + "#formulario-actualizar' class='a-tabla'>Editar</a></td></tr>"
                        listado.insertAdjacentHTML("beforeend", linea)
                    }

                }
            }
        )
}

function anadir_registro() {
    var horas_ayuno = document.getElementById("ayuno-total").value;
    if(horas_ayuno === "- Horas de ayuno -") {
        horas_ayuno = null;
    }
    data = {
        idUsuario: localStorage.getItem("idUsuario"),
        fecha: document.getElementById("fecha").value,
        pesoDia: document.getElementById("peso").value,
        tipo_ejercicio: document.getElementById("ejercicio").value,
        duracion: document.getElementById("duracion").value,
        hora_comienzo: document.getElementById("ayuno-inicio").value,
        hora_fin: document.getElementById("ayuno-fin").value,
        horas_ayuno: horas_ayuno
    }
    fetch('http://localhost:5000/calendario/insertar-registro', {
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


function actualizar_registro() {
    var direccion = window.location.search;
    var variables = new URLSearchParams(direccion);
    var id = variables.get("id");
    data = {
        _id: id
    }
    fetch('http://localhost:5000/calendario/buscar-registro', {
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
                console.log(json.hora_fin)
                var fecha = document.getElementById("fecha-actualizar").value;
                var pesoDia = document.getElementById("peso-actualizar").value;
                var tipo_ejercicio = document.getElementById("ejercicio-actualizar").value;
                var duracion = document.getElementById("duracion-actualizar").value;
                var hora_comienzo = document.getElementById("ayuno-inicio-actualizar").value;
                var hora_final = document.getElementById("ayuno-fin-actualizar").value;
                var horas_ayuno = document.getElementById("ayuno-total-actualizar").value;
                if (fecha.length === 0) {
                    fecha = json.fecha;
                };
                if (pesoDia.length === 0) {
                    pesoDia = json.pesoDia;
                };
                if (tipo_ejercicio.length === 0) {
                    tipo_ejercicio = json.tipo_ejercicio;
                };
                if (duracion.length === 0) {
                    duracion = json.duracion;
                };
                if (hora_comienzo.length === 0) {
                    hora_comienzo = json.hora_comienzo;
                };
                if (hora_final === 0) {
                    hora_final = json.hora_fin;
                };
                if (horas_ayuno === "- Horas de ayuno -") {
                    horas_ayuno = json.horas_ayuno
                }
                data = {
                    _id: id,
                    fecha: fecha,
                    pesoDia: pesoDia,
                    tipo_ejercicio: tipo_ejercicio,
                    duracion: duracion,
                    hora_comienzo: hora_comienzo,
                    hora_fin: hora_final,
                    horas_ayuno: horas_ayuno
                }
                fetch('http://localhost:5000/calendario/actualizar-registro', {
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