var music = new Audio('source/leSidaCPasBien.mp3');
window.onload = (event) => {
    //code here
    console.log("page is fully loaded");


    // get the score in the local storage
    let score = localStorage.getItem("score");
    // Default score value if score isn't in the local storage
    if (score == null)
        score = 0
    // Set the sentences to display
    var array = ["Vous avez " + score + "% de bonnes réponses",
                "On ne peut pas reconnaître une personne atteinte du SIDA",
                "Protégez-vous !", "Cliquez ici pour écouter notre message de prévention"];
    // display them smoothly
    displayTextAfterTime(array, score);
};

async function displayTextAfterTime(array, score) {
    var id_prefix = "msg-";

    for (let index = 0; index < array.length; index++) {
        document.getElementById("messages-container").innerHTML += "<span id=\"" + id_prefix + index + "\">" + array[index] + "</span>";
        document.getElementById("messages-container").style.visibility = "hidden";
    }

    for (let index = 0; index < array.length; index++) {
        var element = document.getElementById(id_prefix + index);
        element.style.visibility = "visible";
        element.classList.add("anime");
        if(index < array.length-1)
            await sleep(2000);
    }
    let texteToPlaySound = document.getElementsByClassName("anime")[array.length-1];
    texteToPlaySound.classList.add("red");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sound(){
    music.play();
}