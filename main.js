// letter variables

const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")


//  sound variables
const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')

// image variables

const clapimg = document.getElementById("clap")
const cymbalimg = document.getElementById("cymbal")
const hihatimg = document.getElementById("hihat")
const kickimg = document.getElementById("kick")
const rideimg = document.getElementById("ride")
const snareimg = document.getElementById("snare")
const tinkimg = document.getElementById("tink")
const tomimg = document.getElementById("tom")


// key presses

window.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        boom.play();
        console.log(event.key)
    } else if (event.key === "s") {
        clap.play();
        console.log(event.key)
    } else if (event.key === "d") {
        hihat.play();
        console.log(event.key)
    } else if (event.key === "f") {
        kick.play();
        console.log(event.key)
    } else if (event.key === "g") {
        openhat.play();
        console.log(event.key)
    } else if (event.key === "h") {
        ride.play();
        console.log(event.key)
    } else if (event.key === "j") {
        snare.play();
        console.log(event.key)
    } else if (event.key === "k") {
        tink.play();
        console.log(event.key)
    } else if (event.key === "l") {
        tom.play();
        console.log(event.key)
    }
})

// clicks!

a.addEventListener("click", () => {
    boom.play();
})
s.addEventListener("click", () => {
    clap.play();
})
d.addEventListener("click", () => {
    hihat.play();
})
f.addEventListener("click", () => {
    kick.play();
})
g.addEventListener("click", () => {
    openhat.play();
})
h.addEventListener("click", () => {
    ride.play();
})
j.addEventListener("click", () => {
    snare.play();
})
k.addEventListener("click", () => {
    tink.play();
})
l.addEventListener("click", () => {
    tom.play();
})

// image clicks

clapimg.addEventListener("click", () => {
    clap.play();
})
cymbalimg.addEventListener("click", () => {
    ride.play();
})
hihatimg.addEventListener("click", () => {
    hihat.play();
})
kickimg.addEventListener("click", () => {
    kick.play();
})
rideimg.addEventListener("click", () => {
    ride.play();
})
snareimg.addEventListener("click", () => {
    snare.play();
})
tinkimg.addEventListener("click", () => {
    tink.play();
})
tomimg.addEventListener("click", () => {
    tom.play();
})