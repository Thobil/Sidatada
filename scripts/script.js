window.onload = (event) => {
    //code here
    console.log("page is fully loaded");
    function doThings(){
        document.getElementById("header").innerHTML = 5 + 6;
    }

    function init(){
        document.addEventListener("click", myFunction);
    }
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
};

