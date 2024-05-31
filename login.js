$(document).ready(function() {
    $('#loginButton').click(function() {
        // Obtener los datos del formulario
        var formData = {
            'username': $('#username').val(),
            'password': $('#password').val() 
        };

        // Enviar los datos al servidor
        $.ajax({
            type: 'POST',
            url: 'https://leop200.pythonanywhere.com/login',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                console.log(response);
                alert(response.mensaje); 
                window.location.href = 'usuario_menu.html'; 
            },
            error: function(error) {
                console.log(error);
                alert("Error: " + error.statusText); 
            }
        });
    });
});