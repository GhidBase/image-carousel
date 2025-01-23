import "./css/styles.css";

class ImageCarousel {
    constructor(targetMain) {
        this.main = document.querySelector(targetMain);
        this.slider = this.main.querySelector(".slider");
        this.previousButton = this.main.querySelector(".previous");
        this.nextButton = this.main.querySelector(".next")
        this.imgWidths = [];
        this.initializeCarousel();
        this.currentImage = 1;
        this.moveToXImage(this.currentImage);
    };

    initializeCarousel() {
        for (let image of this.slider.children) {
            this.imgWidths.push(image.offsetWidth)
        }

        this.previousButton.addEventListener("click", () => this.previousImage());
        this.nextButton.addEventListener("click", () => this.nextImage())
    }

    moveToXImage(amountToMove) {
        amountToMove -= 1;
        let amountToMovePx = 0;
        for (let i = 0; i <= amountToMove; i++) {
            amountToMovePx += this.imgWidths[i];
        }
        amountToMovePx = amountToMovePx - this.imgWidths[amountToMove]/2;
        this.slider.style.left = "-" + amountToMovePx + "px";
    }

    nextImage() {
        this.currentImage += 1;
        if (this.currentImage > this.imgWidths.length) {
            this.currentImage = 1;
        }
        this.moveToXImage(this.currentImage);
    }

    previousImage() {
        this.currentImage -= 1;
        if (this.currentImage < 1) {
            this.currentImage = this.imgWidths.length;
        }
        this.moveToXImage(this.currentImage);
    }
}

let carousel = new ImageCarousel(".carousel-main");
window.carousel = carousel;