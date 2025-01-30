
document.getElementById("chSt").addEventListener("mouseover", function () {

    sum = document.getElementById("sum-one");
    fdr = document.getElementById("fldr-one");

    sum.style.display = "block";
    sum.style.opacity = "1";


})

document.getElementById("chSt").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-one");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";
    }


})

document.getElementById("genTl").addEventListener("mouseover", function () {
    sum = document.getElementById("sum-two");
    sum.style.display = "block";
    sum.style.opacity = "1";

})

document.getElementById("genTl").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-two");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";
    }


})

document.getElementById("sR").addEventListener("mouseover", function () {
    sum = document.getElementById("sum-three");
    sum.style.display = "block";
    sum.style.opacity = "1";

})

document.getElementById("sR").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-three");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";
    }


})