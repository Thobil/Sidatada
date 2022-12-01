
window.score = 0;
window.nbImage =11;

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
}
function sida(response) {
    console.log(response)
    var random_boolean = Math.random() < 0.5;
    if(sida == random_boolean)
        window.score++;
    nextImage();
}
function nextImage(){
    var image = document.getElementById("picture");
    let src =  image.src;
    let data = src.split("_");
    let extension = data[1].split(".")[1];
    let num = data[1].split(".")[0];

    num++;

    if(num > window.nbImage) num = 1
    let name = data[0]+"_"+num+"."+extension;
    console.log(name);
    image.src = name;
}

function eg(){
  if(document.getElementById("eg").value.toLowerCase() == "sida"){
    window.location.href = "eg.html"
  }
}
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}