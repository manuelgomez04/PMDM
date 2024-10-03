$(document).ready(function () {
    $("#desactivar-noche").hide();

    $(document).on("click", "#activar-noche", function () {
        $("body").addClass("noche");
        $("body").removeClass("dia");


        $("#activar-noche").hide();
        $("#desactivar-noche").show();


    });


    $(document).on("click", "#desactivar-noche", function () {
        $("body").addClass("dia");
        $("body").removeClass("noche");


        $("#desactivar-noche").hide();
        $("#activar-noche").show();


    });


});


