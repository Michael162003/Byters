function anadir_registro() {
    data = {
        idUsuario: localStorage.getItem("idUsuario"),
        fecha: document.getElementById("fecha").value,
        pesoDia: document.getElementById("peso").value,
    }
    fetch('http://localhost:5000/calendario/insertar-peso', {
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
            function () {
                data = {
                    idUsuario: localStorage.getItem("idUsuario"),
                    fecha: document.getElementById("fecha").value,
                    hora_comienzo: document.getElementById("ayuno-inicio").value,
                    hora_fin: document.getElementById("ayuno-fin").value,
                    horas_ayuno: document.getElementById("ayuno-total").value
                }
                fetch('http://localhost:5000/calendario/insertar-ayuno', {
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
                        function () {
                            data = {
                                idUsuario: localStorage.getItem("idUsuario"),
                                fecha: document.getElementById("fecha").value,
                                tipo_ejercicio: document.getElementById("ejercicio").value,
                                duracion: document.getElementById("duracion").value
                            }
                            fetch('http://localhost:5000/calendario/insertar-ejercicio', {
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
        )
}


function actualizar_registro() {
    data = {
        idUsuario: localStorage.getItem("idUsuario"),
        fecha: document.getElementById("fecha-actualizar").value,
        pesoDia: document.getElementById("peso-actualizar").value,
    }
    fetch('http://localhost:5000/calendario/actualizar-peso', {
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
            function () {
                data = {
                    idUsuario: localStorage.getItem("idUsuario"),
                    fecha: document.getElementById("fecha-actualizar").value,
                    hora_comienzo: document.getElementById("ayuno-inicio-actualizar").value,
                    hora_fin: document.getElementById("ayuno-fin-actualizar").value,
                    horas_ayuno: document.getElementById("ayuno-total-actualizar").value
                }
                fetch('http://localhost:5000/calendario/actualizar-ayuno', {
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
                        function () {
                            data = {
                                idUsuario: localStorage.getItem("idUsuario"),
                                fecha: document.getElementById("fecha-actualizar").value,
                                tipo_ejercicio: document.getElementById("ejercicio-actualizar").value,
                                duracion: document.getElementById("duracion-actualizar").value
                            }
                            fetch('http://localhost:5000/calendario/actualizar-ejercicio', {
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
        )
}
function cargar_tabla() {
    data = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/calendario/buscar-peso', {
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
            function (json_peso) {
                data = {
                    idUsuario: localStorage.getItem("idUsuario")
                }
                fetch('http://localhost:5000/calendario/buscar-ayuno', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(
                        function (response) {
                            var json_ayuno = response.json();
                            return [json_peso, json_ayuno];
                        }
                    )
                    .then(
                        function (json) {
                            console.log(json[1]);
                            console.log(json[1][0].hora_comienzo);
                            // data = {
                            //     idUsuario: localStorage.getItem("idUsuario")
                            // }
                            // fetch('http://localhost:5000/calendario/buscar-ejercicio', {
                            //     method: "POST",
                            //     body: JSON.stringify(data),
                            //     headers: { 'Content-Type': 'application/json' }
                            // })
                            //     .then(
                            //         function (response) {
                            //             return [json, response.json() ];
                            //         }
                            //     )
                            //     .then(
                            //         function (json) {
                            //             console.log("ejercicio " + json_ejercicio[0]);
                            //             console.log("peso" + json_peso);
                            //             console.log("ayuno" + json_ayuno);
                            //             var listado = document.getElementById("tabla-calendario");
                            //             for (var cont = 0; cont < json_ejercicio.length; cont++) {
                            //                 var linea = "<tr class='tipografia-registro'><td>" + json_peso[0].fecha + "</td><td>" + json_peso[0].pesoDia + "Kg</td><td>" + json_ayuno[cont].hora_comienzo + "</td><td>" + json_ayuno[cont].hora_fin + "</td><td>" + json_ayuno[cont].horas_ayuno +"</td><td>" + json_ejercicio[cont].tipo_ejercicio + "</td><td>" + json_ejercicio[cont].duracion + "</td><a href='registro_avances.html?fecha=" + json_peso[cont].fecha + "#formulario-actualizar'>Editar</a></tr>"
                            //                 listado.insertAdjacentHTML("beforeend", linea);
                            //             }
                            //         }
                            //     )
                        }
                    )
            }
        )
}