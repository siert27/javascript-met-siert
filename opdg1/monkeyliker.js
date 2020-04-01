pics = document.getElementById("pics");
createPicsHolders()
createAapImages()
maakFavoriet()
function createPicsHolders() {
    for(var i = 0; i < 9; i++) {


        pictureHolder = document.createElement("div");
        pictureHolder.className = "aappicture";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }

}
function createAapImages() {

    pictureHolders = document.getElementsByClassName("aappicture");
    for(var i = 0; i <pictureHolders.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "img/aap" + i + ".jpg";
        aapPlaatje.id = i;
        aapPlaatje.addEventListener("click", function () {
                maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(aapPlaatje);
    }
}
function maakFavoriet() {
    console.log("maak mij Favoriet! het gaat om aap..." + id);

}