



let a = 0;

function rHomeSlide() {
    if (a >= -300 && a <= 0) {
        if (a >= -200 || a == 0) {
            a -= 100;
        }
        document.getElementById("home_img1").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img2").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img3").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img4").style.transform = "translateX(" + a + "%)";
    }
    switch (a) {
        case 0:
            document.getElementById("dash1").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -100:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -200:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -300:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 60px; background-color: rgb(7, 7, 90)"
            break
    }

}

function lHomeSlide() {

    if (a >= -300 && a < 0)
        a += 100;
    if (a >= -300 && a <= 0) {
        document.getElementById("home_img1").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img2").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img3").style.transform = "translateX(" + a + "%)";
        document.getElementById("home_img4").style.transform = "translateX(" + a + "%)";
    }
    switch (a) {
        case 0:
            document.getElementById("dash1").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -100:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -200:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 60px; background-color: rgb(7, 7, 90)"
            document.getElementById("dash4").style = "width: 20px; background-color: lightgrey"
            break
        case -300:
            document.getElementById("dash1").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash2").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash3").style = "width: 20px; background-color: lightgrey"
            document.getElementById("dash4").style = "width: 60px; background-color: rgb(7, 7, 90)"
            break
    }


}

// ----------------------------------------------------------------------------------------

let s;

function chicken() {
    s = 0;
    document.querySelectorAll(".chick").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".mutton").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".beef").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".pork").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".fish").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".animals>div:first-child p").forEach(x => x.style = "color: #0f67b4ff; font-weight: bold")
    document.querySelectorAll(".animals>div:nth-child(2) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(3) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(4) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:last-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
}

function mutton() {

    s = -100;
    document.querySelectorAll(".chick").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".mutton").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".beef").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".pork").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".fish").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".animals>div:first-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(2) p").forEach(x => x.style = "color: #0f67b4ff; font-weight: bold")
    document.querySelectorAll(".animals>div:nth-child(3) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(4) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:last-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
}

function beef() {
    s = -200;
    document.querySelectorAll(".chick").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".mutton").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".beef").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".pork").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".fish").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".animals>div:first-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(2) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(3) p").forEach(x => x.style = "color: #0f67b4ff; font-weight: bold")
    document.querySelectorAll(".animals>div:nth-child(4) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:last-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
}

function pork() {
    s = -300;
    document.querySelectorAll(".chick").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".mutton").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".beef").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".pork").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".fish").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".animals>div:first-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(2) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(3) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(4) p").forEach(x => x.style = "color: #0f67b4ff; font-weight: bold")
    document.querySelectorAll(".animals>div:last-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
}

function fish() {
    s = -400;
    document.querySelectorAll(".chick").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".mutton").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".beef").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".pork").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".fish").forEach(x => x.style = "transform: translateX(" + s + "%)")
    document.querySelectorAll(".animals>div:first-child p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(2) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(3) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:nth-child(4) p").forEach(x => x.style = "color: rgb(75, 74, 74); font-weight: unset")
    document.querySelectorAll(".animals>div:last-child p").forEach(x => x.style = "color: #0f67b4ff; font-weight: bold")
}





// ----------------------------------------------------------------------------------------


function delivery() {
    document.querySelectorAll(".box1 img").forEach(x => x.style = "animation: scooty 4.5s linear 5;")
    document.querySelectorAll(".box1>div").forEach(x => x.style = "width: 100%;")

}


// ----------------------------------------------------------------------------------------------


let nav = document.querySelector(".nav-pills");

flag = false;

nav.addEventListener('click', (e) => {
    e.preventDefault;
    console.log("e")
    flag = !flag;
    if (flag === true) {
        document.querySelector(".nav-bar").style = "left: unset; right: 0px; transition: all 2s;"
    } else {
        document.querySelector(".nav-bar").style = "left: 100%; right: unset; transition: all 2s;"
    }

})