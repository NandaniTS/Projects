let btn = document.getElementById("tag");
function playSound(audioname) 
{
    let audio = new Audio(audioname);
    audio.play();
}

function togglebtn() 
{
    let btn = document.getElementById("tag");
    btn.classList.toggle("active");
    let textElements = document.querySelectorAll(".text");
    textElements.forEach(function(element) 
    {
        element.style.display = btn.classList.contains("active") ? "none" : "flex";
    });
}
function adjustVolume() 
{
    let audioElements = document.querySelectorAll("audio");
    let volumeInput = document.getElementById("volumeRange");
    audioElements.forEach(function(audio) 
    {
        audio.volume = volumeInput.value/100;
    });
}








