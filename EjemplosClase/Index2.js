$(document).ready(function () {

    var i = 0;

    $(document).on("click", "#btn-add-paragraph", function () {
        $("#content").append('<p>'+i+' Lorem ipsum</p> <button class="btn-delete-paragraph">Borrar párrafo</button>');
        i++;
    });

    $(document).on("click", ".btn-delete-paragraph", function () {
        $(this).closest("p").remove();  
    });
});