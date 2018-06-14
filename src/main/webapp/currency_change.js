$(document).ready(function () {
    var timeout = null;
    $('#amount').on('keyup', function () {
        var that = this;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            that.value = parseFloat(that.value).toFixed(2);
        }, 1000);
    });
});
