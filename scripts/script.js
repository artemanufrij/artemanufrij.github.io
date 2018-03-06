$(document).ready(function () {
    console.debug (window.location.protocol + "//" + window.location.host + "/");
    $.get("footer.html", function (data) {
        $("footer").html(data);
    });
});