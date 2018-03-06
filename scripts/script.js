$(document).ready(function () {
    $.get("../footer.html", function (data) {
        $("footer").html(data);
    });
});