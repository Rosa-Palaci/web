$(document).ready(function() {
    $.get("https://leop200.pythonanywhere.com/alumnos", function(data) {
        // Ordenar los datos por puntaje total
        var PuntajesGlobal = data.slice().sort(function(a, b) {
            return b.total - a.total;
        }).slice(0, 5); // 5 mejores puntajes

        // mujeres
        var mujeres = data.filter(function(alumno) {
            return alumno.genero === 'Femenino';
        });
        var PuntajesMujeres = mujeres.slice().sort(function(a, b) {
            return b.total - a.total;
        }).slice(0, 5);

        // hombres
        var hombres = data.filter(function(alumno) {
            return alumno.genero === 'Masculino';
        });
        var PuntajesHombres = hombres.slice().sort(function(a, b) {
            return b.total - a.total;
        }).slice(0, 5);


        mostrarPuntajes(PuntajesGlobal, 'Global');

        mostrarPuntajes(PuntajesMujeres, 'Mujeres');

        mostrarPuntajes(PuntajesHombres, 'Hombres');
    });
});

//tabla
function mostrarPuntajes(datos, tablaId) {
    var tbody = $('#' + tablaId + ' tbody');
    tbody.empty();

    datos.forEach(function(alumno) {
        var fila = '<tr>' +
            '<td>' + alumno.n_lista + '</td>' +
            '<td>' + alumno.grupo + '</td>' +
            '<td>' + alumno.nivel1 + '</td>' +
            '<td>' + alumno.nivel2 + '</td>' +
            '<td>' + alumno.nivel3 + '</td>' +
            '<td>' + alumno.total + '</td>';
        
        if (tablaId === 'Global') {
            fila += '<td>' + alumno.genero + '</td>';
        }
        
        fila += '</tr>';
        tbody.append(fila);
    });
}
