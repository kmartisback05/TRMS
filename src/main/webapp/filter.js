﻿$(document).ready(function () {
    $("#inputfilter").keyup(function () {
        filter = new RegExp($(this).val(), 'i');
        $("#filterme tbody tr").filter(function () {
            $(this).each(function () {
                found = false;
                $(this).children().each(function () {
                    content = $(this).html();
                    if (content.match(filter)) {
                        found = true
                    }
                });
                if (!found) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
        });
    });
});