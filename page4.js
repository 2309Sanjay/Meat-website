
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

const lapQuery = window.matchMedia('(min-width: 768px)');
const moblieQuery = window.matchMedia('(min-width: 280px');

if (lapQuery.matches) {
    let toggle = false;
    function dropDown() {
        if (document.getElementById("radio").checked) {
            toggle = !toggle;
            if (toggle == true) {
                document.querySelector(".paybox>div:first-child").style = "min-height: 160px; overflow:hidden;"
                document.querySelector(".payment-type").style = "transform: translateY(0px)"
            } else {
                document.querySelector(".payment-type").style = "transform: translateY(-120px)"
                document.querySelector(".paybox>div:first-child").style = "min-height: 50px; overflow:hidden"
            }
        }
    }

    let name,
        password;

    function google() {
        name = 'sanjay',
            password = 2309;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-500px)"
    }
    function phonepay() {
        name = 'ajay',
            password = 1403;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-500px)"
    }
    function paytm() {
        name = 'vasu',
            password = 1979;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-500px)"
    }
    function amazon() {
        name = 'prabha',
            password = 1981;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-500px)"
    }


    function pay() {
        let n = document.getElementById("name").value,
            p = document.getElementById("pass").value;
        console.log(name, password)
        if (n.toLowerCase() == name && p == password) {
            document.getElementById("name").value = "";
            document.getElementById("pass").value = "";
            location.href = "file:///C:/Users/SANJAY/Documents/Front-end/projects/Meat%20page/page5.html";
        } else {
            document.getElementById("name").style = "border: 2px solid crimson";
            document.getElementById("pass").style = "border: 2px solid crimson";
            document.getElementById("name").value = "";
            document.getElementById("pass").value = "";
        }
    }

}

else if (moblieQuery.matches) {
    let toggle = false;
    function dropDown() {
        if (document.getElementById("radio").checked) {
            toggle = !toggle;
            if (toggle == true) {
                document.querySelector(".paybox>div:first-child").style = "min-height: 120px; overflow:hidden;"
                document.querySelector(".payment-type").style = "transform: translateY(0px)"
            } else {
                document.querySelector(".payment-type").style = "transform: translateY(-120px)"
                document.querySelector(".paybox>div:first-child").style = "min-height: 50px; overflow:hidden"
            }
        }
    }

    let name,
        password;

    function google() {
        name = 'sanjay',
            password = 2309;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-45px)"
    }
    function phonepay() {
        name = 'ajay',
            password = 1403;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-45px)"
    }
    function paytm() {
        name = 'vasu',
            password = 1979;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-45px)"
    }
    function amazon() {
        name = 'prabha',
            password = 1981;
        console.log(name, password)
        document.getElementById("password").style = "transform: translateY(-45px)"
    }


    function pay() {
        let n = document.getElementById("name").value,
            p = document.getElementById("pass").value;
        console.log(name, password)
        if (n.toLowerCase() == name && p == password) {
            document.getElementById("name").value = "";
            document.getElementById("pass").value = "";
            location.href = "file:///C:/Users/SANJAY/Documents/Front-end/projects/Meat%20page/page5.html";
        } else {
            document.getElementById("name").style = "border: 2px solid crimson";
            document.getElementById("pass").style = "border: 2px solid crimson";
            document.getElementById("name").value = "";
            document.getElementById("pass").value = "";
        }
    }

}






