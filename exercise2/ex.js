let one = "img/1.jpg";
let two = "img/2.jpg";
let three = "img/3.jpg";
let four = "img/4.jpg";
let five = "img/5.jpg";

let state = "1"

let back = document.getElementById("back");
let forward = document.getElementById("forward");
document.getElementById("img").height=200;
document.getElementById("img").width=200;

back.addEventListener("click", e => {
    let img = document.getElementById("img").src;
    if(state == "1") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = five;
        state = "5"
    } else if(state == "2") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = one;
        state = "1"
    } else if(state == "3") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = two
        state = "2"
    } else if(state == "4") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = three
        state = "3"
    } else if(state == "5") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = four 
        state = "4"
    }
})

forward.addEventListener("click", e => {
    let img = document.getElementById("img").src;
    if(state == "1") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = two;
        state = "2"
    } else if(state == "2") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = three;
        state = "3"
    } else if(state == "3") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = four
        state = "4"
    } else if(state == "4") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = five
        state = "5"
    } else if(state == "5") {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = one
        state = "1" 
    }
})