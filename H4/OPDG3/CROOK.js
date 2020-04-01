var plaatjes = [1,2,3];

var teller = 0;

var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/hoofd1.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/hoofd" + getAap() +".jpg')";
});

var mond = document.getElementById("mond");
    mond.style.backgroundImage = "url('img/mond" + getAap() +".jpg')";





function  getAap() {

    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}