let one = "file:///Users/chris/Desktop/lab3/exercise2/img/1.jpg";
let two = "file:///Users/chris/Desktop/lab3/exercise2/img/2.jpg";
let three = "file:///Users/chris/Desktop/lab3/exercise2/img/3.jpg";
let four = "file:///Users/chris/Desktop/lab3/exercise2/img/4.jpg";
let five = "file:///Users/chris/Desktop/lab3/exercise2/img/5.jpg";

let back = document.getElementById("back");
let forward = document.getElementById("forward");
document.getElementById("img").height=200;
document.getElementById("img").width=200;

back.addEventListener("click", e => {
    let img = document.getElementById("img").src;
    if(img == one) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = five;
    } else if(img == two) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = one;
    } else if(img == three) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = two
    } else if(img == four) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = three
    } else if(img == five) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = four 
    }
})

forward.addEventListener("click", e => {
    let img = document.getElementById("img").src;
    if(img == one) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = two;
    } else if(img == two) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = three;
    } else if(img == three) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = four
    } else if(img == four) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = five
    } else if(img == five) {
        document.getElementById("img").height=200;
        document.getElementById("img").width=200;
        document.getElementById("img").src = one 
    }
})