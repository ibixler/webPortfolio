var img = 'test';
var modal = 'test';
var modalImg = 'test';


window.onload = function(){
    console.log('your balls are tiny');
    img = document.getElementById("galleryImg-1");
    modal = document.getElementById("galleryModal");
    modalContent = document.getElementById('img01')
    modalImg = img.src;
}
 



console.log('literally fucking crying');
function triggerModal(photoNum){
    img = document.getElementById("galleryImg-" + photoNum);
    modalImg = img.src

    console.log("clicked");

    modal.style.display = "block";
    modalContent.src = modalImg;
}


function closeModal(){
    console.log('lick my balls');
    console.log(modal);
    modal.style.display = "none";
    console.log(modal);
    
}


