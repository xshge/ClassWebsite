
document.getElementById("chSt").addEventListener("mouseover", function () {

    sum = document.getElementById("sum-one");
    fdr = document.getElementById("fldr-one");

    sum.style.display = "block";
    sum.style.opacity = "1";
    sum.style.visibility = "visible";

})

document.getElementById("chSt").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-one");

    if (sum.style.display == "block") {
        sum.style.display = "none";
    }


})