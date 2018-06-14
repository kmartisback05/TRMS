$(document).ready(function () {
    $('table tbody tr  td').on('click', function () {
        $("#myModal").modal("show");

        $("#Name").val($(this).closest('tr').children()[1].textContent);
        $("#Department").val($(this).closest('tr').children()[2].textContent);
        $("#Phone").val($(this).closest('tr').children()[3].textContent);
        
        $("#Email").val($(this).closest('tr').children()[4].textContent);
        $("#Type").text($(this).closest('tr').children()[5].textContent);

        $("#Amount").val($(this).closest('tr').children()[6].textContent);
        $("#Step").text($(this).closest('tr').children()[7].textContent);
        $("#Submission").text($(this).closest('tr').children()[9].textContent);
        $("#Status").text($(this).closest('tr').children()[8].textContent);

    });
});
