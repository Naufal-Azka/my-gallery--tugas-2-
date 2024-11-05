// let images = [];
// let currentSlideIndex = 0;

// const lightboxContainer = document.createElement("div");
// lightboxContainer.id = "lightbox";
// lightboxContainer.className = "lightbox";
// document.body.appendChild(lightboxContainer);

// function openLightbox(index) {
//     images = document.querySelectorAll(".gallery .container .container--card img");

//     const lightboxContent = document.createElement("div");
//     lightboxContent.className = "lightbox-content";

//     let htmlContent = "";

    // for (let i = 0; i < images.length; i++){
    //     htmlContent +=
    //     `<div class="mySlides" style="display: ${i === index ? 'block' : 'none'};">
    //         <img src="${images[i].src}" class="lightbox-img">
    //     </div>`;
    // }

//     lightboxContent.innerHTML = htmlContent;
//     lightboxContent.innerHTML +=
//     `<span class="close cursor">&times;</span>
//     <a class="prev">&#10094;</a>
//     <a class="next">&#10095;</a>`;
    
    // lightboxContainer.innerHTML = "";
    // lightboxContainer.appendChild(lightboxContent);
    // lightboxContent.style.display = "flex";

//     currentSlideIndex = index;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".gallery .container .container--card img").forEach(function (img, index) {
//         img.addEventListener("click", function () {
//             openLightbox(index);
//         });
//     });
// });
let images = [];
let currentSlideIndex = 0;

const lightboxContainer = document.createElement("div")
lightboxContainer.className = "lightbox";
lightboxContainer.id = "lightbox";

document.body.appendChild(lightboxContainer);

const navBar = document.getElementById("navbar");

function openLightbox(index){
    images = document.querySelectorAll(".gallery .container .container--card img");

    const lightboxContent = document.createElement("div");
    lightboxContent.className = 'lightbox-content';

    let htmlContent = "";
    images.forEach(function (img, i) {
        htmlContent += `<div class="mySlides" style="display: ${i === index ? 'block':'none'};"> <img src="${img.src}" class="lightbox-img"/> </div>`
    });

    htmlContent += `<span class="close cursor" onClick="closeLightbox()">&times;</span>
        <a class="prev" onClick="changeSlide(1)">&#10094;</a>
        <a class="next" onClick="changeSlide(-1)">&#10095;</a>`;
    lightboxContent.innerHTML = htmlContent;
    lightboxContainer.innerHTML = '';
    lightboxContainer.appendChild(lightboxContent);
    lightboxContainer.style.display = 'flex'
    navBar.style.display = 'none';

    currentSlideIndex = index;
}

function closeLightbox() {
    lightboxContainer.style.display = "none";
    navBar.style.display = '';
}

function changeSlide(n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0; // Loop back to start
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1; // Loop back to end
    }

    const slides = lightboxContainer.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slides[currentSlideIndex].style.display = "block"; // Show current slide
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery .container .container--card img").forEach(function (img, index) {
        img.addEventListener("click",function () {
            openLightbox(index);
        });
    });
});