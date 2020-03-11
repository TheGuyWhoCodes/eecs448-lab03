document.getElementById("submit").addEventListener("click", e => {
    let br = document.getElementById("br").value;
    let bg = document.getElementById("bg").value;
    let bb = document.getElementById("bb").value;

    let borderWidth = document.getElementById("border").value;

    let brr = document.getElementById("brr").value;
    let bgg = document.getElementById("bgg").value;
    let bbb = document.getElementById("bbb").value;

    document.getElementsByTagName("BODY")[0].style.backgroundColor = 'rgb(' + brr + ',' + bgg + ',' + bbb + ')';
    document.getElementsByTagName("BODY")[0].style.border = 'solid rgb(' + br + ',' + bg + ',' + bb + ')';
    document.getElementsByTagName("BODY")[0].style.borderWidth = borderWidth;

});