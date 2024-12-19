function loadValkyrie(Valkyrie){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) {
            console.log("ok it worked");
            var vJSON = JSON.parse(this.responseText);
            var temp = document.getElementById("output");
            temp.innerHTML = this.responseText;
            console.log(this.responseText);
        }
    };

    // If you are on Sandcastle, move all the .json from the products directory to the main directory
    // And change this line to "" instead of "products/""
    xhttp.open("GET", "valkyrie/" + Valkyrie + ".json", true);
    xhttp.send();
    //console.log("b")
}
