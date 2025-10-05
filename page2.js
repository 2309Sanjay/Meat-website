
let nav = document.querySelector("nav");

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


// ------------------------------------------------------------------------

let lapQuery = window.matchMedia('(min-width: 768px)');
let mobileQuery = window.matchMedia('(min-width: 280px)');

if (lapQuery.matches) {
    let g = 0;

    function rItemslide() {
        if (g >= -640 && g <= 0) {
            g -= 160;
            document.querySelectorAll(".meat .meat_items").forEach(x => x.style = "transform: translateX(" + g + "%);")
        }
    }


    function lItemslide() {

        if (g >= -800 && g < 0) {
            g += 160;
        }
        if (g >= -800 && g <= 0) {
            document.querySelectorAll(".meat .meat_items").forEach(x => x.style = "transform: translateX(" + g + "%);")
        }
    }

    sea = 0;

    function R_itemslide() {
        if (sea >= -640 && sea <= 0) {
            sea -= 160;
            document.querySelectorAll(".seafood .meat_items").forEach(x => x.style = "transform: translateX(" + sea + "%);")
        }
    }


    function L_itemslide() {

        if (sea >= -800 && sea < 0) {
            sea += 160;
        }
        if (sea >= -800 && sea <= 0) {
            document.querySelectorAll(".seafood .meat_items").forEach(x => x.style = "transform: translateX(" + sea + "%);")
        }
    }
}
else if (mobileQuery.matches) {
    let g = 0;

    function rItemslide() {
        if (g >= -640 && g <= 0) {
            g -= 100;
            document.querySelectorAll(".meat .meat_items").forEach(x => x.style = "transform: translateX(" + g + "%);")
        }
    }


    function lItemslide() {

        if (g >= -800 && g < 0) {
            g += 100;
        }
        if (g >= -800 && g <= 0) {
            document.querySelectorAll(".meat .meat_items").forEach(x => x.style = "transform: translateX(" + g + "%);")
        }
    }

    sea = 0;

    function R_itemslide() {
        if (sea >= -640 && sea <= 0) {
            sea -= 100;
            document.querySelectorAll(".seafood .meat_items").forEach(x => x.style = "transform: translateX(" + sea + "%);")
        }
    }


    function L_itemslide() {

        if (sea >= -800 && sea < 0) {
            sea += 100;
        }
        if (sea >= -800 && sea <= 0) {
            document.querySelectorAll(".seafood .meat_items").forEach(x => x.style = "transform: translateX(" + sea + "%);")
        }
    }
}

//  ----------------------------------------------------------------------------------------

// ORDERS 

let q1 = q2 = q3 = q4 = q5 = q6 = q7 = q8 = q9 = q10
    = row1 = row2 = row3 = row4 = row5 = row6 = row7 = row8 = row9 = row10 = 0;
var amt;


function plus(a) {
    switch (a) {
        case 1:
            q1 += 1;
            document.querySelector(".order-box1 .count h3").innerText = q1;
            break;
        case 2:
            q2 += 1;
            document.querySelector(".order-box2 .count h3").innerText = q2;
            break;
        case 3:
            q3 += 1;
            document.querySelector(".order-box3 .count h3").innerText = q3;
            break;
        case 4:
            q4 += 1;
            document.querySelector(".order-box4 .count h3").innerText = q4;
            break;
        case 5:
            q5 += 1;
            document.querySelector(".order-box5 .count h3").innerText = q5;
            break;
        case 6:
            q6 += 1;
            document.querySelector(".order-box6 .count h3").innerText = q6;
            break;
        case 7:
            q7 += 1;
            document.querySelector(".order-box7 .count h3").innerText = q7;
            break;
        case 8:
            q8 += 1;
            document.querySelector(".order-box8 .count h3").innerText = q8;
            break;

        // -------------------------------------------------------------------
        // PAGE 3 

        case -1:
            q1 += 1;
            document.querySelector(".chicken .order-count h3").innerText = q1;
            row1 = q1 * 100;
            document.querySelector(".chicken .total").innerText = `₹${row1}`;
            break;
        case -2:
            q2 += 1;
            document.querySelector(".mutton .order-count h3").innerText = q2;
            row2 = q2 * 150
            document.querySelector(".mutton .total").innerText = `₹${row2}`;
            break;
        case -3:
            q3 += 1;
            document.querySelector(".beef .order-count h3").innerText = q3;
            row3 = q3 * 120;
            document.querySelector(".beef .total").innerText = `₹${row3}`;
            break;
        case -4:
            q4 += 1;
            document.querySelector(".pork .order-count h3").innerText = q4;
            row4 = q4 * 90;
            document.querySelector(".pork .total").innerText = `₹${row4}`;
            break;
        case -5:
            q5 += 1;
            document.querySelector(".fish .order-count h3").innerText = q5;
            row5 = q5 * 200;
            document.querySelector(".fish .total").innerText = `₹${row5}`;
            break;
        case -6:
            q6 += 1;
            document.querySelector(".duck .order-count h3").innerText = q6;
            row6 = q6 * 130;
            document.querySelector(".duck .total").innerText = `₹${row6}`;
            break;
        case -7:
            q7 += 1;
            document.querySelector(".prawn .order-count h3").innerText = q7;
            row7 = q7 * 80;
            document.querySelector(".prawn .total").innerText = `₹${row7}`;
            break;
        case -8:
            q8 += 1;
            document.querySelector(".crab .order-count h3").innerText = q8;
            row8 = q8 * 110;
            document.querySelector(".crab .total").innerText = `₹${row8}`;
            break;
        case -9:
            q9 += 1;
            document.querySelector(".oyster .order-count h3").innerText = q9;
            row9 = q9 * 300;
            document.querySelector(".oyster .total").innerText = `₹${row9}`;
            break;
        case -10:
            q10 += 1;
            document.querySelector(".mussels .order-count h3").innerText = q10;
            row10 = q10 * 250;
            document.querySelector(".mussels .total").innerText = `₹${row10}`;
            break;
    }
    var amt = row1 + row2 + row3 + row4 + row5 + row6 + row7 + row8 + row9 + row10;
    document.querySelector('.amount').innerText = `₹${amt}`;

    place(amt);
}

function minus(a) {
    switch (a) {
        case 1:
            q1 -= 1;
            document.querySelector(".order-box1 .count h3").innerText = q1;
            break;
        case 2:
            q2 -= 1;
            document.querySelector(".order-box2 .count h3").innerText = q2;
            break;
        case 3:
            q3 -= 1;
            document.querySelector(".order-box3 .count h3").innerText = q3;
            break;
        case 4:
            q4 -= 1;
            document.querySelector(".order-box4 .count h3").innerText = q4;
            break;
        case 5:
            q5 -= 1;
            document.querySelector(".order-box5 .count h3").innerText = q5;
            break;
        case 6:
            q6 -= 1;
            document.querySelector(".order-box6 .count h3").innerText = q6;
            break;
        case 7:
            q7 -= 1;
            document.querySelector(".order-box7 .count h3").innerText = q7;
            break;
        case 8:
            q8 -= 1;
            document.querySelector(".order-box8 .count h3").innerText = q8;
            break;

        // ----------------------------------------------------------------------------------------
        // Page 3


        case -1:
            q1 -= 1;
            document.querySelector(".chicken .order-count h3").innerText = q1;
            row1 = q1 * 100;
            document.querySelector(".chicken .total").innerText = `₹${row1}`;
            break;
        case -2:
            q2 -= 1;
            document.querySelector(".mutton .order-count h3").innerText = q2;
            row2 = q2 * 150
            document.querySelector(".mutton .total").innerText = `₹${row2}`;
            break;
        case -3:
            q3 -= 1;
            document.querySelector(".beef .order-count h3").innerText = q3;
            row3 = q3 * 120;
            document.querySelector(".beef .total").innerText = `₹${row3}`;
            break;
        case -4:
            q4 -= 1;
            document.querySelector(".pork .order-count h3").innerText = q4;
            row4 = q4 * 90;
            document.querySelector(".pork .total").innerText = `₹${row4}`;
            break;
        case -5:
            q5 -= 1;
            document.querySelector(".fish .order-count h3").innerText = q5;
            row5 = q5 * 200;
            document.querySelector(".fish .total").innerText = `₹${row5}`;
            break;
        case -6:
            q6 -= 1;
            document.querySelector(".duck .order-count h3").innerText = q6;
            row6 = q6 * 130;
            document.querySelector(".duck .total").innerText = `₹${row6}`;
            break;
        case -7:
            q7 -= 1;
            document.querySelector(".prawn .order-count h3").innerText = q7;
            row7 = q7 * 80;
            document.querySelector(".prawn .total").innerText = `₹${row7}`;
            break;
        case -8:
            q8 -= 1;
            document.querySelector(".crab .order-count h3").innerText = q8;
            row8 = q8 * 110;
            document.querySelector(".crab .total").innerText = `₹${row8}`;
            break;
        case -9:
            q9 -= 1;
            document.querySelector(".oyster .order-count h3").innerText = q9;
            row9 = q9 * 300;
            document.querySelector(".oyster .total").innerText = `₹${row9}`;
            break;
        case -10:
            q10 -= 1;
            document.querySelector(".mussels .order-count h3").innerText = q10;
            row10 = q10 * 250;
            document.querySelector(".mussels .total").innerText = `₹${row10}`;
            break;
    }
    var amt = row1 + row2 + row3 + row4 + row5 + row6 + row7 + row8 + row9 + row10;
    document.querySelector('.amount').innerText = `₹${amt}`;

    place(amt);
}

//  ----------------------------------------------------------------------------------------

function place(e) {

    const amount = e;

    localStorage.setItem('finalamount', amount);
}


//  ----------------------------------------------------------------------------------------


let cork = goat = cow = pig = fishes = ducks = prawns = crabs = oysters = mussel = true;
function place_chicken() {
    cork = !cork;
    if (cork === false) {
        localStorage.setItem('chicken', 'true');
    } else {
        localStorage.setItem('chicken', 'false');
    }
}

if (localStorage.getItem('chicken') === 'true') {
    document.querySelector(".chicken").style = "display: flex";
    // localStorage.removeItem("chicken");
} else if (localStorage.getItem('chicken') === 'false') {
    document.querySelector(".chicken").style = "display: none";
    // localStorage.removeItem("chicken");
}

// ------------------------------------------------------------------
function place_mutton() {
    goat = !goat;
    if (goat === false) {
        localStorage.setItem('mutton', 'true');
    } else {
        localStorage.setItem('mutton', 'false');
    }
}

if (localStorage.getItem('mutton') === 'true') {
    document.querySelector(".mutton").style = "display: flex";
    // localStorage.removeItem("mutton");
} else if (localStorage.getItem('mutton') === 'false') {
    document.querySelector(".mutton").style = "display: none";
    // localStorage.removeItem("mutton");
}
// ------------------------------------------------------------------

function place_beef() {
    cow = !cow;
    if (cow === false) {
        localStorage.setItem('beef', 'true');
    } else {
        localStorage.setItem('beef', 'false');
    }
}

if (localStorage.getItem('beef') === 'true') {
    document.querySelector(".beef").style = "display: flex";
    // localStorage.removeItem("beef");
} else if (localStorage.getItem('beef') === 'false') {
    document.querySelector(".beef").style = "display: none";
    // localStorage.removeItem("beef");
}
// ------------------------------------------------------------------

function place_pork() {
    pig = !pig;
    if (pig === false) {
        localStorage.setItem('pork', 'true');
    } else {
        localStorage.setItem('pork', 'false');
    }
}

if (localStorage.getItem('pork') === 'true') {
    document.querySelector(".pork").style = "display: flex";
    // localStorage.removeItem("pork");
} else if (localStorage.getItem('pork') === 'false') {
    document.querySelector(".pork").style = "display: none";
    // localStorage.removeItem("pork");
}
// ------------------------------------------------------------------


function place_fish() {
    fishes = !fishes;
    if (fishes === false) {
        localStorage.setItem('fish', 'true');
    } else {
        localStorage.setItem('fish', 'false');
    }
}

if (localStorage.getItem('fish') === 'true') {
    document.querySelector(".fish").style = "display: flex";
    // localStorage.removeItem("fish");
} else if (localStorage.getItem('fish') === 'false') {
    document.querySelector(".fish").style = "display: none";
    // localStorage.removeItem("fish");
}
// ------------------------------------------------------------------

function place_duck() {
    ducks = !ducks;
    if (ducks === false) {
        localStorage.setItem('duck', 'true');
    } else {
        localStorage.setItem('duck', 'false');
    }
}

if (localStorage.getItem('duck') === 'true') {
    document.querySelector(".duck").style = "display: flex";
    // localStorage.removeItem("duck");
} else if (localStorage.getItem('duck') === 'false') {
    document.querySelector(".duck").style = "display: none";
    // localStorage.removeItem("duck");
}
// ------------------------------------------------------------------

function place_prawn() {
    prawns = !prawns;
    if (prawns === false) {
        localStorage.setItem('prawn', 'true');
    } else {
        localStorage.setItem('prawn', 'false');
    }
}

if (localStorage.getItem('prawn') === 'true') {
    document.querySelector(".prawn").style = "display: flex";
    // localStorage.removeItem("prawn");
} else if (localStorage.getItem('prawn') === 'false') {
    document.querySelector(".prawn").style = "display: none";
    // localStorage.removeItem("prawn");
}
// ------------------------------------------------------------------

function place_crab() {
    crabs = !crabs;
    if (crabs === false) {
        localStorage.setItem('crab', 'true');
    } else {
        localStorage.setItem('crab', 'false');
    }
}

if (localStorage.getItem('crab') === 'true') {
    document.querySelector(".crab").style = "display: flex";
    // localStorage.removeItem("crab");
} else if (localStorage.getItem('crab') === 'false') {
    document.querySelector(".crab").style = "display: none";
    // localStorage.removeItem("crab");
}
// ------------------------------------------------------------------

function place_oyster() {
    oysters = !oysters;
    if (oysters === false) {
        localStorage.setItem('oyster', 'true');
    } else {
        localStorage.setItem('oyster', 'false');
    }
}

if (localStorage.getItem('oyster') === 'true') {
    document.querySelector(".oyster").style = "display: flex";
    // localStorage.removeItem("oyster");
} else if (localStorage.getItem('oyster') === 'false') {
    document.querySelector(".oyster").style = "display: none";
    // localStorage.removeItem("oyster");
}
// ------------------------------------------------------------------

function place_mussels() {
    mussel = !mussel;
    if (mussel === false) {
        localStorage.setItem('mussels', 'true');
    } else {
        localStorage.setItem('mussels', 'false');
    }
}

if (localStorage.getItem('mussels') === 'true') {
    document.querySelector(".mussels").style = "display: flex";
    // localStorage.removeItem("mussels");
} else if (localStorage.getItem('mussels') === 'false') {
    document.querySelector(".mussels").style = "display: none";
    // localStorage.removeItem("mussels");
}
// ------------------------------------------------------------------

function remove(item) {
    switch (item) {
        case 'chicken':
            document.querySelector(".chicken").style = "display: none";
            break;
        case 'mutton':
            document.querySelector(".mutton").style = "display: none";
            break;
        case 'beef':
            document.querySelector(".beef").style = "display: none";
            break;
        case 'pork':
            document.querySelector(".pork").style = "display: none";
            break;
        case 'fish':
            document.querySelector(".fish").style = "display: none";
            break;
        case 'duck':
            document.querySelector(".duck").style = "display: none";
            break;
        case 'prawn':
            document.querySelector(".prawn").style = "display: none";
            break;
        case 'crab':
            document.querySelector(".crab").style = "display: none";
            break;
        case 'oyster':
            document.querySelector(".oyster").style = "display: none";
            break;
        case 'mussels':
            document.querySelector(".mussels").style = "display: none";
            break;
    }
}

function reload() {
    localStorage.removeItem("chicken");
    localStorage.removeItem("mutton");
    localStorage.removeItem("beef");
    localStorage.removeItem("pork");
    localStorage.removeItem("fish");
    localStorage.removeItem("duck");
    localStorage.removeItem("prawn");
    localStorage.removeItem("crab");
    localStorage.removeItem("oyster");
    localStorage.removeItem("mussels");
}




// ------------------------------------------------------------------
// function next() {
//     window.location.href = "file:///C:/Users/SANJAY/Documents/Front-end/projects/Meat%20page/page2.html";
// }

// ------------------------------------------------------------------

function order() {
    window.location.href = "file:///C:/Users/SANJAY/Documents/Front-end/projects/Meat%20page/page4.html";
}






