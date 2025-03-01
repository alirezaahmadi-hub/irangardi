let audio = document.getElementById("backgroundAudio");
let audioButton = document.getElementById("audioButton");
let isPlaying = false;

audioButton.addEventListener("click", function() {
    if (isPlaying) {
        audio.pause();
        audioButton.textContent = "🔊";
    } else {
        audio.play();
        audioButton.textContent = "🔇";
    }
    isPlaying = !isPlaying;
});
