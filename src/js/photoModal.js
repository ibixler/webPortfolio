
var modal = document.getElementById("galleryModal");

const [img] = document
    .querySelector(".row")

console.log(img)

var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption');

console.log('literally fucking crying')
img.onclick = function(){
    console.log("clicked")
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function(){
    modal.style.dispay = "none";
}