//Written by Ivy Bixler Jun 2022

//called to open responsive menu
function burgerMenu() {
    var x = document.getElementById("respoNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//called to show hamburger menu icon
function replace() {
    console.log("tst")
    eva.replace()
    console.log("hello")
}

//gets root of css sheet
var root = document.querySelector(':root');

//called to set responsive element sizes
function mobileResize() {
    var rootStyles = getComputedStyle(root);
    if (window.innerWidth > 600) {
        console.log("wide enough to not worry, just yet :)");
    }
    else{
        let width = window.innerWidth;
        root.style.setProperty('--mobileWidth', window.innerWidth - 8 + 'px')
    }
}

