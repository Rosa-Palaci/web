$(document).ready(function() {
    $.get("https://leop200.pythonanywhere.com/alumnos", function(data) {
        var nivel1 = data.map(function(alumno) { return parseFloat(alumno.nivel1); });
        var nivel2 = data.map(function(alumno) { return parseFloat(alumno.nivel2); });
        var nivel3 = data.map(function(alumno) { return parseFloat(alumno.nivel3); });
        var total = data.map(function(alumno) { return parseFloat(alumno.total); });

        var promedioNivel1 = calcularPromedio(nivel1);
        var promedioNivel2 = calcularPromedio(nivel2);
        var promedioNivel3 = calcularPromedio(nivel3);
        var promedioTotal = calcularPromedio(total);

        // gráfico de promedio
        var promedioChart = new Chart(document.getElementById('promedioChart'), {
            type: 'bar',
            data: {
                labels: ['Nivel 1', 'Nivel 2', 'Nivel 3',],
                datasets: [{
                    label: 'Promedio de Puntajes',
                    data: [promedioNivel1, promedioNivel2, promedioNivel3],
                    backgroundColor: [
                        '#3a557c',
                        '#6a6a6a',
                        '#8fc027',
                    ],
                    borderColor: [
                        '#3a557c',
                        '#6a6a6a',
                        '#8fc027',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // gráfico por nivel
        var puntajesNivelChart = new Chart(document.getElementById('puntajesNivelChart'), {
            type: 'line',
            data: {
                labels: data.map(function(alumno) { return alumno.n_lista; }),
                datasets: [{
                    label: 'Nivel 1',
                    data: nivel1,
                    borderColor: '#3a557c',
                    borderWidth: 1
                },
                {
                    label: 'Nivel 2',
                    data: nivel2,
                    borderColor: '#6a6a6a',
                    borderWidth: 1
                },
                {
                    label: 'Nivel 3',
                    data: nivel3,
                    borderColor: '#8fc027',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});

// Función para calcular el promedio de un conjunto de números
function calcularPromedio(array) {
    var sum = array.reduce(function(a, b) { return a + b; }, 0);
    return sum / array.length;
}
