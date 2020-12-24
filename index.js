// Probably wanna dynamically load everything?
var slideIndex = 0;
var slidesBaseClasses = "slide-container fade ";

var poem = [
    "There's no better reason\nFor poetry of the season!",
    "Can you believe it my dear?",
    "We 'survived' a COVID year!",
    "But really, we did more than survive",
    "By the grace of God, I say: We thrived!",
    "I've watched you grow in faith and love",
    "Growing ever closer to God above",
    "Watched you as you got baptised",
    "-- your spiritual 'birthday' publicised!",
    "Though the year was tough with lots of 'bugs'",
    "We realised how much we missed those hugs",
    "We realised how the love of two joined hearts",
    "Beats ever stronger when they're apart.",
    "Through ups and downs, and highs and lows,",
    "We held fast, through the stormy blows,",
    "Standing firm on the Rock of Christ,",
    "Drawing strength from His sacrifice",
    "Knowing well this world shall pass,",
    "And we will unite with God at last!",
    "But, until then, we live down here",
    "In a world of sorrows pain and fear",
    "But, as we have, with hugs and prayers,",
    "Overcome, through Christ, a testing year!",
    "May we continue with conjoined hearts",
    "To love to cherish, and never part"
];

var images = [
    "merrychristmas",
    "shocked",
    "cutetgt",
    "nottrainedforthis",
    "pray",
    "love2",
    "goodjob",
    "images/baptised.gif",
    "baptised2",
    // TODO: more verses
    "computerbugs",
    "hugs",
    "hearts",
    "hearts2",
    "upsanddowns",
    "rain",
    "cross",
    "lamb"
];

function buildSlides(){
    var container = document.getElementsByClassName("container")[0];
    for(var i = 0; i < poem.length; i++) {
        var imgSrc;

        if(i >= images.length || !images[i].length) {
            imgSrc = "images/blank.png";
        }
        // Full path already specified
        else if (images[i].indexOf(".") != -1) {
            imgSrc = images[i];
        }
        else {
            imgSrc = "images/" + images[i] + ".png";
        }

        poemText = poem[i];
        
        var slideContainer = document.createElement("div");
        slideContainer.className = slidesBaseClasses + "hidden";
        
        var imgEle = document.createElement("img");
        imgEle.src = imgSrc;
        imgEle.alt = poemText;

        var txtEle = document.createElement("div");
        txtEle.innerText = poemText;
        txtEle.className = "text bold";

        slideContainer.appendChild(imgEle);
        slideContainer.appendChild(txtEle);
        container.appendChild(slideContainer);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    buildSlides();
    showSlides(slideIndex);
});

document.addEventListener("keyup", function(event){
    if (event.key == "ArrowLeft") {
        plusSlide(-1);
    }
    else if (event.key == "ArrowRight") {
        plusSlide(1);
    }
});
    
// Next/previous controls
function plusSlide(inc) {
    showSlides(slideIndex + inc);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide-container");

    slideIndex = Math.max(0, Math.min(n, slides.length-1));

    document.getElementsByClassName("prev")[0].style.opacity = (slideIndex <= 0) ? 0 : 1 ;
    document.getElementsByClassName("next")[0].style.opacity = (slideIndex >= slides.length) ? 0 : 1;


    for (var i = 0; i < slides.length; i++) {
        slides[i].className = slidesBaseClasses;
        slides[i].className += ((i == slideIndex) ? "display" : "hidden");
    }
}