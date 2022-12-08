function cargar_info() {
    data = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/perfil/buscar-perfil', {
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
                var annio = json.fecha_nacimiento.substring(6,10)
                var edad = (2022 - parseInt(annio)).toString()
 
                var info = document.getElementById("info-perfil");
                var info_agua = document.getElementById("agua_cant");
                var info_perfil = document.getElementById("foto-perfil")
                var foto_perfil = "<img src='" + json.foto + "'>"
                console.log("FOTOOOOO " + foto_perfil)
                var nombre = "<h2><i class='fa-solid fa-user'></i> Nombre: " + json.nombre + "</h2>";
                var fecha_nacimiento = "<h2><i class='fa-solid fa-cake-candles'></i> Fecha de Nacimiento: " + json.fecha_nacimiento + "</h2>";
                var edad = "<h2><i class='fa-regular fa-calendar-days'></i> Edad: " + edad + "</h2>"
                var genero = "<h2><i class='fa-solid fa-venus-mars'></i> Género: " + json.genero + "</h2>";
                var altura = "<h2><i class='fa-solid fa-person-arrow-up-from-line'></i> Altura Actual: " + json.altura + "cm</h2>";
                var peso = "<h2><i class='fa-solid fa-weight-scale'></i> Peso Actual: " + json.peso + "Kg</h2>";
                var calc_imc = (json.peso) / Math.pow((json.altura) / 100, 2);
                var imc_final = calc_imc.toString().substring(0, 5);
                var imc = "<h2><i class='fa-solid fa-notes-medical'></i> IMC Actual: " + imc_final + "</h2>";
                var boton = "<h3><a href='#formulario-personal' class='boton-registrar'>Modificar Información</a></h3>"
                var calc_agua = (((json.peso * 35) / 1000).toString()).substring(0, 4)
                var agua = "<h1 class='cant-agua'>" + calc_agua + " Litros</h1>";
                info_perfil.insertAdjacentHTML("beforeend", foto_perfil)
                info.insertAdjacentHTML("beforeend", nombre);
                info.insertAdjacentHTML("beforeend", fecha_nacimiento);
                info.insertAdjacentHTML("beforeend", genero);
                info.insertAdjacentHTML("beforeend", edad);
                info.insertAdjacentHTML("beforeend", altura);
                info.insertAdjacentHTML("beforeend", peso);
                info.insertAdjacentHTML("beforeend", imc);
                info.insertAdjacentHTML("beforeend", boton);
                info_agua.insertAdjacentHTML("beforeend", agua)
                console.log(json);
                console.log(json.nombre);
            }
        )
        .then(
            function () {
                data = {
                    idUsuario: localStorage.getItem("idUsuario")
                }
                fetch('http://localhost:5000/perfil/buscar-logros', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(
                        function (response) {
                            return response.json()
                        }
                    )
                    .then(
                        function (json) {
                            var listado_obtenidos = document.getElementById("logros-obtenidos");
                            var listado_pendientes = document.getElementById("logros-pendientes");
                            for (var cont = 0; cont < json.length; cont++) {
                                if (json[cont].estado === "Pendiente") {
                                    if (json[cont].tipo === "Reducción o Subida de Peso") {
                                        var elemento = "<div class='w-logros'><img src='../Media/peso-logro.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                                    } else if (json[cont].tipo === "Reducción o Aumento del IMC") {
                                        var elemento = "<div class='w-logros'><img src='../Media/imc-foto.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                                    } else if (json[cont].tipo === "Cantidad de Horas de Ayuno") {
                                        var elemento = "<div class='w-logros'><img src='../Media/ayuno-intermitente.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                    } else if (json[cont].tipo === "Cantidad de Días de Ayuno") {
                                        var elemento = "<div class='w-logros'><img src='../Media/ayuno-dias.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                                    }
                                } else if (json[cont].estado === "Completado") {
                                    if (json[cont].tipo === "Reducción o Subida de Peso") {
                                        var elemento = "<div class='w-logros'><img src='../Media/peso-logro.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                                    } else if (json[cont].tipo === "Reducción o Aumento del IMC") {
                                        var elemento = "<div class='w-logros'><img src='../Media/imc-foto.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                                    } else if (json[cont].tipo === "Cantidad de Horas de Ayuno") {
                                        var elemento = "<div class='w-logros'><img src='../Media/ayuno-intermitente.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                                    } else if (json[cont].tipo === "Cantidad de Días de Ayuno") {
                                        var elemento = "<div class='w-logros'><img src='../Media/ayuno-dias.png'><a href='perfil.html?id=" + json[cont]._id + "#formulario-estado'><h2>" + json[cont].titulo + "</h2></a></div>";
                                        listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                                    }
                                }
                            }

                        }
                    )
                    .then(
                        function () {

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
                                        return response.json()
                                    }
                                )
                                .then(
                                    function (json) {
                                        // var xValues = [50,60,70,80,90,100,110,120,130,140,150];
                                        // var yValues = [7,8,8,9,9,9,10,11,14,14,15];
                                        var xValues = [];
                                        var yValues = [];
                                        var maxValor = json[0].pesoDia;
                                        var minValor = json[0].pesoDia;
                                        for(var cont = 0; cont<json.length; cont++){
                                            xValues.push(json[cont].fecha);
                                            yValues.push(parseInt(json[cont].pesoDia) )
                                            if(maxValor < json[cont].pesoDia) {
                                                maxValor = json[cont].pesoDia;
                                            }
                                            if(minValor > json[cont].pesoDia) {
                                                minValor = json[cont].pesoDia;
                                            }
                                        }
                                        
                                        console.log(xValues)
                                        console.log(yValues)
                                        console.log(json[0].pesoDia)
                                        new Chart("myChart", {
                                            type: "line",
                                            data: {
                                                labels: xValues,
                                                datasets: [{
                                                    fill: false,
                                                    lineTension: 0,
                                                    backgroundColor: "rgba(0,0,255,1.0)",
                                                    borderColor: "rgba(0,0,255,0.1)",
                                                    data: yValues
                                                }]
                                            },
                                            options: {
                                                legend: { display: false },
                                                scales: {
                                                    yAxes: [{ ticks: { min: minValor, max: (maxValor + 3) } }],
                                                }
                                            }
                                        });
                                    }
                                )

                        }
                    )
            }
        )
}
function actualizar_logro() {
    var direccion = window.location.search;
    var variables = new URLSearchParams(direccion);
    var id = variables.get("id");
    var estado = document.getElementById("estado-logro").value;
    if (estado !== "- Seleccione el estado del logro -") {
        data = {
            _id: id,
            estado: document.getElementById("estado-logro").value
        }
        fetch("http://localhost:5000/perfil/actualizar-logros", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                alert("Se ha actualizado el logro")
            )
    } else {
        alert("Seleccione un estado valido")
    }

}

function actualizar() {

    data1 = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/perfil/buscar-perfil', {
        method: "POST",
        body: JSON.stringify(data1),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                var nombre = document.getElementById("nombre").value;
                var fecha_nacimiento = document.getElementById("fecha").value;
                var genero = document.getElementById("genero").value;
                var altura = document.getElementById("altura").value;
                var peso = document.getElementById("peso").value;
                var foto = document.getElementById("imagen_input").value;
                console.log(peso)
                console.log(altura)
                if (nombre.length === 0) {
                    nombre = json.nombre;
                };
                if (fecha_nacimiento.length === 0) {
                    fecha_nacimiento = json.fecha_nacimiento;
                };
                if (genero === "Tu género") {
                    genero = json.genero;
                };
                if (fecha_nacimiento === 0) {
                    fecha_nacimiento = json.fecha_nacimiento;
                }
                if (altura.length === 0) {
                    altura = json.altura;
                }
                if (peso.length === 0) {
                    peso = json.peso;
                }
                if (foto.length === 0) {
                    foto = json.foto
                }
                data = {
                    idUsuario: localStorage.getItem("idUsuario"),
                    nombre: nombre,
                    fecha_nacimiento: fecha_nacimiento,
                    genero: genero,
                    altura: altura,
                    peso: peso,
                    foto: foto
                }
                fetch('http://localhost:5000/perfil/actualizar-perfil', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(
                        function (response) {
                            return response.json()
                        }
                    )
            }

        )
}
function anadir_logro() {
    var titulo = document.getElementById('titulo').value;
    var tipo = document.getElementById('tipo-logro').value;
    if (titulo.length === 0 || tipo === "- Selecciona un tipo de logro -") {
        alert("Porfavor llene todos los espacios requeridos")
    } else {
        data = {
            titulo: document.getElementById('titulo').value,
            tipo: document.getElementById('tipo-logro').value,
            estado: "Pendiente",
            idUsuario: localStorage.getItem("idUsuario")
        }
        fetch('http://localhost:5000/perfil/insertar-logros', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(
                function (response) {
                    return response.json()
                }
            )
            .then(
                alert("Se ha registrado el logro exitosamente")
            )
    }

}
function cargar_logros() {
    data = {
        idUsuario: localStorage.getItem("idUsuario")
    }
    fetch('http://localhost:5000/perfil/buscar-logros', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function (json) {
                var listado_obtenidos = document.getElementById("logros-obtenidos");
                var listado_pendientes = document.getElementById("logros-pendientes");
                for (var cont = 0; cont < json.length; cont++) {
                    if (json[cont].estado === "Pendiente") {
                        if (json[cont].tipo === "Reducción o Subida de Peso") {
                            var elemento = "<div class='w-logros'><img src='../Media/peso-logro.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Reducción o Aumento del IMC") {
                            var elemento = "<div class='w-logros'><img src='../Media/imc-foto.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Cantidad de Horas de Ayuno") {
                            var elemento = "<div class='w-logros'><img src='../Media/ayuno-intermitente.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Cantidad de Días de Ayuno") {
                            var elemento = "<div class='w-logros'><img src='../Media/ayuno-dias.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_pendientes.insertAdjacentHTML("beforeend", elemento);
                        }
                    } else if (json[cont].estado === "Completado") {
                        if (json[cont].tipo === "Reducción o Subida de Peso") {
                            var elemento = "<div class='w-logros'><img src='../Media/peso-logro.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Reducción o Aumento del IMC") {
                            var elemento = "<div class='w-logros'><img src='../Media/imc-foto.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Cantidad de Horas de Ayuno") {
                            var elemento = "<div class='w-logros'><img src='../Media/ayuno-intermitente.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                        } else if (json[cont].tipo === "Cantidad de Días de Ayuno") {
                            var elemento = "<div class='w-logros'><img src='../Media/ayuno-dias.png'><h2>" + json[0].titulo + "</h2></div>";
                            listado_obtenidos.insertAdjacentHTML("beforeend", elemento);
                        }
                    }
                }
            }
        )
}

function grafico() {
    var xValues = ["hola", 50, 70, 90, "prueba", 110, 120, 130, 140, 150];
    var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 6, max: 16 } }],
            }
        }
    });
}
