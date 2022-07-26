function burgerMenu() {
    console.log("boobiew")

    var x = document.getElementById("respoNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}

function replace() {
    console.log("tst")
    eva.replace()
    console.log("hello")
}

var root = document.querySelector(':root');


function mobileResize() {
    var rootStyles = getComputedStyle(root);
    if (window.innerWidth > 600) {
        console.log("wide enough to not worry just yet");
    }
    else{
        let width = window.innerWidth;
        root.style.setProperty('--mobileWidth', window.innerWidth - 8 + 'px')
    }
}

