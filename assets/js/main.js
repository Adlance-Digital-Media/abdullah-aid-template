// Image Lazy Loading
var imgDefer = document.getElementsByTagName("img");
for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
}

// Light Gallery Init
lightGallery(document.getElementById('masonry_grid'), {
    plugins: [lgThumbnail],
    speed: 500,
    enableSwipe:true,
});