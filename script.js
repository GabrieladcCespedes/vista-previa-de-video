/**Gabriela Céspedes */
console.log("page loaded...");

/** esta función reproduce el video, obtiene el elemento del video por su id*/ 
function playVideo() {
    var video = document.getElementById("my-video");
    video.play();
}

/** esta función pausa el video, obtiene el elemento del video por su id*/ 
function pauseVideo() {
    var video = document.getElementById("my-video");
    video.pause();
}