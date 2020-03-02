document.getElementById("submit").addEventListener("click", e => {
    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    if(one.length < 8 || two.length < 8) {
        alert("the passwords are not at least 8 characters long")
    } else if(one != two) {
        alert("the passwords are not the same");
    }
})