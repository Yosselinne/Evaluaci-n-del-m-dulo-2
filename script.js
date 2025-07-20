$(document).ready(function() {
    // Función para mostrar/ocultar la información de prevención
    $('.btn-info').click(function() {
        var infoDiv = $(this).next('.prevention-info');
        var button = $(this);

        // Si el div está visible, lo ocultamos
        if (infoDiv.is(':visible')) {
            infoDiv.slideUp();
            button.text("Mostrar formas de prevenir");
        } else {
            infoDiv.slideDown();
            button.text("Ocultar formas de prevenir");
        }
    });

    // Función para cerrar todas las listas de prevención
    function closeAllPreventionInfo() {
        // Ocultar todas las listas de prevención
        $('.prevention-info').slideUp();

        // Restaurar los textos de los botones
        $('.btn-info').text("Mostrar formas de prevenir");
    }

    // Detectar el cambio de slide en el carrusel
    $('#carousel2').on('slid.bs.carousel', function() {
        closeAllPreventionInfo();
    });

    // Cuando se cargue la página, cerrar todas las listas de prevención
    closeAllPreventionInfo();

    // Validación del formulario de contacto
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();

        var email = $('#email').val();
        var message = $('#message').val();

        if (email && message) {
            // Mostrar el modal de confirmación
            var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            myModal.show();

            // Limpiar los campos del formulario
            $('#email').val('');
            $('#message').val('');
        } else {
            // Mostrar mensaje de error
            $('#form-message').text('Por favor, completa todos los campos.').css('color', 'red').show();
        }
    });

    // Test de seguridad
    $('#submitTest').on('click', function () {
        var q1 = $('#q1').val();
        var q2 = $('#q2').val();
        var q3 = $('#q3').val();
        var result = '';

        // Validar si alguna opción no ha sido seleccionada
        if (q1 === 'placeholder' || q2 === 'placeholder' || q3 === 'placeholder') {
            alert('Por favor, responde todas las preguntas.');
            return;
        }

        var noAnswers = 0;

        if (q1 === 'no') noAnswers++;
        if (q2 === 'no') noAnswers++;
        if (q3 === 'no') noAnswers++;

        if (noAnswers === 3) {
            result = '¡Excelente! Estás tomando buenas prácticas de seguridad.';
        } else if (noAnswers === 2 || noAnswers === 1) {
            result = 'Parece que hay algunas áreas donde puedes mejorar. ¡Asegúrate de proteger tu información!';
        } else if (noAnswers === 0) {
            result = '¡Alerta! Podrías ser víctima de un ataque. Mejora tu seguridad.';
        }

        // Mostrar el resultado
        $('#test-result').text(result).show();
    });
});
