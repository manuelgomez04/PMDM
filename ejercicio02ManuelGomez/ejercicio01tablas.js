$(document).ready(function () {

    $(document).on("click", "#btn-add-fila", function () {
        var row = "<tr><td>Nuevo</td></tr>";
        $("#table").append(row);
    });

    $(document).on("click", "#btn-add-columna", function () {
        $("#table tr").each(function () {
            $(this).append("<td>Nuevo</td>");
        });
    });

    $(document).on("click", "#btn-delete-fila", function () {
        $("#table tr:last").remove();
    });

    $(document).on("click", "#btn-delete-columna", function () {
        $("#table tr").each(function () {
            $(this).children().last().remove();
        });
    });
});