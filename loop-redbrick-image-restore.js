// <div class="carousel-item item active" style="background-image: url(https://loop.dcu.ie/pluginfile.php/1/theme_catawesome/slideimages/0/loop-background-photo-2024.jpg);"></div>

// var loopImage = document.getElementsByClassName("header_link_image")[0];
// loopImage.src = browser.runtime.getURL('/images/loop-background-image-2023.jpg');

if (document.URL.includes("https://loop.dcu.ie/login/index.php")) {
    var loopImage = document.getElementsByClassName("carousel-item item active")[0];
    loopImage.style.backgroundImage = "url(" + browser.runtime.getURL('/images/loop-background-image-2023.jpg') + ")";
}

if (document.URL.includes("loop.dcu.ie")) {
    var loopIndexImage = document.getElementsByClassName("limitedwidth format-site course path-site gecko dir-ltr lang-en yui-skin-sam yui3-skin-sam loop-dcu-ie pagelayout-frontpage course-1 context-2 hamburger-left custom-header jsenabled")[0];
    loopIndexImage.style.backgroundImage = "url(" + browser.runtime.getURL('/images/loop-background-image-2023.jpg') + ")";
}

//if (document.style.backgroundImage.includes("loop-background-photo-2024.jpg")) {
//    document.style.backgroundImage = "url(" + browser.runtime.getURL('/images/loop-background-image-2023.jpg') + ")";
//}