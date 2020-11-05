import $ from 'jquery';

require("../../node_modules/nicescroll/jquery.nicescroll");

require('../../node_modules/font-awesome/scss/font-awesome.scss');

$(document).ready(function() {
    /// niceScroll

    $("html").niceScroll({
        zindex: 3,
        cursorborder: 0,
        background: "white",
        cursorcolor: "#e6a157",
        cursorwidth: "8px",
        border: 0,
        overflowX: "hidden",
        cursorborderradius: 0,
    });

    $(document).on(
        "click",
        "div.footer-back",
        function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 },
                "500"
            );
        }
    );

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $(
                'meta[name="csrf-token"]'
            ).attr("content"),
        },
    });

    setTimeout(function() {
        $(".preloader").fadeOut(300);
    }, 500);
});