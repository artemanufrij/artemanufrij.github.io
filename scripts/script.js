$(document).ready(function () {
    $.get("../footer.html", function (data) {
        $("footer").html(data);
    });
    $.get("../donate.html", function (data) {
        $("donate").html(data);
    });
});