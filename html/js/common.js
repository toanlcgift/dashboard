$(document).ready(function () {
    $("#forget-password").click(function () {
        $(".login-form").hide();
        $(".forget-form").show();
    });

    $("#sign-up").click(function () {
        $(".login-form").hide();
        $(".sign-up-form").show();
    });
    $("#cancel-btn").click(function () {
        $(".login-form").show();
        $(".sign-up-form").hide();
    });
    $('#clickmewow').click(function () {
        $('#radio1003').attr('checked', 'checked');
    });
});