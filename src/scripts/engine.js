const pianoKeys = document.querySelectorAll(".piano-keys.key")

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav")

const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelectorAll(`[data-key="${key}]"`)
    clickedKey.classicList.add("active");
    setTimeout(() =>{
        clickedKey.classicList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) =>{
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});
