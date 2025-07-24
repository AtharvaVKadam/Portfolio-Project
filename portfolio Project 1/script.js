const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function circleMouseFollow(event) {
    window.addEventListener("mousemove", function(dets) {
        circleMouseFollow(dets);}
    )}

    circleMouseFollow();