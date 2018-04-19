$(document).ready(function () {
    $('#clickmewow').click(function () {
        $('#radio1003').attr('checked', 'checked');
    });
    $(".custome-toggle").click(function () {
        $(this).toggleClass("open");
    });
    hWin = $( window ).height();
    $('.login').css('height', hWin);

})

$(document).ready(function () {
    w = $('.page-sidebar.navbar-collapse.collapse').width();
    $('#a').css('width', w);
    return false;
});
$(function () {
    $('.thong-ke').on('click', function () {
        if ($('#a').is(':visible')) {
            $('#a').animate({ 'width': '0px' }, 'slow', function () {
                $('#a').hide();
            });
        }
        else {
            $('#a').show();
            $('#a').animate({ 'width': w }, 'slow');
        }
        return false;
    });
});
// $(function () {
//     $('.show-sub-menu').on('click', function () {
//         if ($('#a').is(':visible')) {
//             $('#a').animate({ 'width': '0px' }, 'slow', function () {
//                 $('#a').hide();
//             });
//         }
//         else {
//             $('#a').show();
//             $('#a').animate({ 'width': w }, 'slow');
//         }
//         return false;
//     });
// });

