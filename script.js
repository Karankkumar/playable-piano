const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeslider = document.querySelector(".volume-slider input")
const keyscheckbox = document.querySelector(".keys-checkbox input")

let allkeys = [];
let audio = new Audio();

const playTune = (key) => {
    audio.src = `${key}.wav` // passing audio src based on key pressed
    audio.play();
    // console.log(allkeys);

    const clickedkey = document.querySelector(`[data-key="${key}"]`); //getting clicked  key element
    clickedkey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => {
        // removing active class after 150ms from the clicked key element
        clickedkey.classList.remove("active");
    }, 150);
}

pianokeys.forEach(key => {
    // console.log(key.dataset.key);
    allkeys.push(key.dataset.key);   // adding data-key value to the allkeys array 
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const handlevolume = (e) => {
    audio.volume = e.target.value; // passing the range of slider value as an audio volume
}

const showhidekeys = () =>{

    // toggling hide class from each key n the checkbox click
    pianokeys.forEach(key =>
        key.classList.toggle("hide")
    )
}

// through this we can use keboard keys to play the piano
const pressedkey = (e) => {
    // console.log(e.key);
    // if the pressed key is in the allkeys array(i.e present in the piano) , only call the playTune function
    if (allkeys.includes(e.key)) playTune(e.key);
}


keyscheckbox.addEventListener("input", showhidekeys);
volumeslider.addEventListener("input", handlevolume);
document.addEventListener("keydown", pressedkey);
