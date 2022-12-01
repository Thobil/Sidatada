
window.score = 0;
window.nbImage = 6;

window.onload = (event) => {
    //code here
    console.log("page is fully loaded");
    init();
}
function doThings(){
    document.getElementById("header").innerHTML = 5 + 6;
}

function init(){
    document.getElementById("yesButton").addEventListener("click", sida(true));
    document.getElementById("noButton").addEventListener("click", sida(false));
    document.getElementById("noButton").addEventListener("click", eg);

}
function sida(response) {
    console.log(response)
    var random_boolean = Math.random() < 0.5;
    if(sida == random_boolean)
        window.score++;
    nextImage();
}
function nextImage(){
    let image = document.getElementById("fit-picture");
    nb =  parseInt(image.src);
    if(nb > window.nbImage) nb = 1
    image.src = nb;
}

function eg(){
  let a = document.getElementById("post_title").value;
  if(a = "sida")
}