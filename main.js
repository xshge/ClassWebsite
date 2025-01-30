
document.getElementById("chSt").addEventListener("mouseover", function () {

    sum = document.getElementById("sum-one");
    fdr = document.getElementById("fldr-one");

    sum.style.display = "block";
    sum.style.opacity = "1";
    if (window.innerWidth <= 500) {

        document.querySelector(".C").style.transform = "scale(0.40) translate(-150px, -140%)";
    } else {
        document.querySelector(".C").style.transform = "scale(0.25) translate(-50%, -100%)";
    }
    if (window.innerWidth <= 1200 && window.innerWidth >= 500) {
        //document.querySelector(".C").style.top = "calc(anchor(--changing top) + 10px)";
        document.querySelector(".C").style.right = "calc(anchor(--changing right) - 10%)";
    }
    //document.querySelector(".C").style.bottom = "anchor(--dirone bottom)";

})

document.getElementById("chSt").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-one");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";
        document.querySelector(".C").style.transform = "scale(1)";

        document.querySelector(".C").style.right = "anchor(--changing right, 10%)";
    }


})

document.getElementById("genTl").addEventListener("mouseover", function () {
    sum = document.getElementById("sum-two");
    sum.style.display = "block";
    sum.style.opacity = "1";

    if (window.innerWidth <= 500) {
        console.log("reformating");
        document.querySelector(".T").style.transform = "scale(0.40) translate(-150px, -140%)";
    } else {
        document.querySelector(".T").style.transform = "scale(0.25) translate(-50%, -100%)";
    }

})

document.getElementById("genTl").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-two");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";

        document.querySelector(".T").style.transform = "scale(1)";
    }


})

document.getElementById("sR").addEventListener("mouseover", function () {
    sum = document.getElementById("sum-three");
    sum.style.display = "block";
    sum.style.opacity = "1";

    if (window.innerWidth <= 500) {
        console.log("reformating");
        document.querySelector(".S").style.transform = "scale(0.40) translate(-150px, -140%)";
    } else {
        document.querySelector(".S").style.transform = "scale(0.25) translate(-50%, -100%)";
    }
})

document.getElementById("sR").addEventListener("mouseout", function () {

    sum = document.getElementById("sum-three");

    if (sum.style.display == "block") {
        sum.style.display = "none";
        sum.style.opacity = "0";

        document.querySelector(".S").style.transform = "scale(1)";
    }


})