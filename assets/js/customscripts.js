document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('#nav ul').classList.toggle('active');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Optional: add automatic slide show functionality
let timer = setInterval(function() { plusSlides(1); }, 8000); // Change image every 4 seconds

// Optional: stop the slideshow when the user hovers over the slideshow container
document.querySelector('.slideshow-container').addEventListener('mouseover', function() {
    clearInterval(timer);
});

document.querySelector('.slideshow-container').addEventListener('mouseout', function() {
    timer = setInterval(function() { plusSlides(1); }, 4000);
});