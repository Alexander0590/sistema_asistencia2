//busqueda de personal
$(document).on('input', '#acodigo', function () {
    let codigo = $(this).val();
    
    if (codigo.length > 0) {
        $.ajax({
            url: "proceso/asistenciaman.php?action=busper",
            method: "POST",
            data: { codigo: codigo },
            success: function(response) {
                $("#adatos").val(response);
            }
        });
    } else {
        $("#adatos").val(""); // Borra el contenido si no hay código
    }
});
