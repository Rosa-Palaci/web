$(document).ready(function () {
    function cargarAlumnos() {
        $.get("https://leop200.pythonanywhere.com/alumnos", function (data) {
            var grupos = {};

            // Agrupar alumnos por su grupo
            data.forEach(function (alumno) {
                if (!(alumno.grupo in grupos)) {
                    grupos[alumno.grupo] = [];
                }
                grupos[alumno.grupo].push(alumno);
            });

            // Crear tablas para cada grupo de alumnos
            var gruposAlumnos = $('#grupos-alumnos');
            gruposAlumnos.empty();
            Object.keys(grupos).forEach(function (grupo) {
                var tabla = $('<table>').addClass('rounded-table').css('margin-bottom', '10%');
                var thead = $('<thead>').appendTo(tabla);
                var tbody = $('<tbody>').appendTo(tabla);

                var encabezado = '<tr>' +
                    '<th>Número de Lista</th>' +
                    '<th>Grupo</th>' +
                    '<th>Género</th>' +
                    '<th>Nivel 1</th>' +
                    '<th>Nivel 2</th>' +
                    '<th>Nivel 3</th>' +
                    '<th>Total</th>' +
                    '</tr>';
                $(encabezado).appendTo(thead);

                grupos[grupo].forEach(function (alumno) {
                    var fila = '<tr>' +
                        '<td>' + alumno.n_lista + '</td>' +
                        '<td>' + alumno.grupo + '</td>' +
                        '<td>' + alumno.genero + '</td>' +
                        '<td>' + alumno.nivel1 + '</td>' +
                        '<td>' + alumno.nivel2 + '</td>' +
                        '<td>' + alumno.nivel3 + '</td>' +
                        '<td>' + alumno.total + '</td>' +
                        '</tr>';
                    $(fila).appendTo(tbody);
                });

                var tituloGrupo = $('<div>').addClass('titulos');
                $('<h2>').addClass('titulos').css('color', '#3a557c').css('font-size', '50px').text('Grupo: ' + grupo).appendTo(tituloGrupo);
                gruposAlumnos.append(tituloGrupo);
                gruposAlumnos.append(tabla);
            });
        });
    }

    // Cargar los alumnos al cargar la página
    cargarAlumnos();
});
