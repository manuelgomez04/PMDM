$(document).ready(function () {
    //Selector de etiqueta
    //Básicamente esto dice que seleciconemos todos los H1 y le cambiemos el texto por "Adiós Mundo cruel"
    $("h1").html("Adiós Mundo cruel");

    //Selector de id SIEMPRE EMPIEZA CON #
    //Básicamente esto dice que seleciconemos el elemento con id "page-title" y le cambiemos el texto por "Título Hola Mundo"
    $("#page-title").html("Título Hola Mundo");

    //Selector de clase SIEMPRE EMPIEZA CON .
    $(".red").attr("style", "color:red");

    //Evento de click
    $(document).on("click", "#btn-clear", function () {
        $("h1").html("");
    })

    $(document).on("click", "#btn-change", function () {
        $("h1").html("Adiós Mundo cruel");

        //Selector de id SIEMPRE EMPIEZA CON #
        //Básicamente esto dice que seleciconemos el elemento con id "page-title" y le cambiemos el texto por "Título Hola Mundo"
        $("#page-title").html("Título Hola Mundo");

        //Selector de clase SIEMPRE EMPIEZA CON .
        $(".red").attr("style", "color:red");

    })

    $(document).on("click", "#add-yellow", function () {
        $("#page-title").addClass("yellow");
    });

    $(document).on("click", "#delete-yellow", function () {
        $("#page-title").removeClass("yellow");
    });

});