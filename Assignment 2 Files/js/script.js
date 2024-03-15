const enlargeImages = document.querySelectorAll(".base-liquid-images");
const body = document.querySelector("body");

enlargeImages.forEach(image => {
    image.addEventListener("mouseenter", function(){
        this.style.height = "150px";
        this.borderRadius = "0";
    });
});

enlargeImages.forEach(image => {
    image.addEventListener("mouseleave", function(){
        this.style.height = "90px";
    });
});
