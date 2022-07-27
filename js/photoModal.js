//Written by Ivy Bixler Jul 2022
//Initializing variables
//

var img = 'test';
var modal = 'test';
var modalImg = 'test';
var modalAlt = 'test'
//runs once window loads because otherwise the page breaks
window.onload = function(){
    img = document.getElementById("galleryImg-1");
    modal = document.getElementById("galleryModal");
    modalContent = document.getElementById('img01')
    modalImg = img.src;
}
//called when a photo is clicked
function triggerModal(photoNum){
    img = document.getElementById("galleryImg-" + photoNum);
    modalImg = img.src;
    modalAlt = img.alt;
    console.log(modalAlt);

    console.log("clicked");

    modal.style.display = "block";
    modalContent.src = modalImg;
    modalContent.alt = modalAlt;

}
//called when close button is clicked
function closeModal(){
    console.log(modal);
    modal.style.display = "none";
    console.log(modal);
}


