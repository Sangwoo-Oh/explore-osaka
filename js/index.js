window.onload = () => {
// Get the modal
modal("image01");
modal("image02");
modal("image03");
modal("image04");
function modal(imageName) {
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = document.getElementById(imageName);
    var modalImg = document.getElementById("Modal");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
}
};