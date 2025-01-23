import "./css/styles.css";

class ImageCarousel {
    constructor(targetSlider) {
        this.slider = document.querySelector(targetSlider);
        this.imgWidths = [];
        this.initializeCarousel();
    };

    initializeCarousel() {
        for (let image of this.slider.children) {
            this.imgWidths.push(image.offsetWidth)
        }
        console.log(this.imgWidths);
    }

    moveToXImage(amountToMove) {
        amountToMove -= 1;
        let amountToMovePx = 0;
        for (let i = 0; i <= amountToMove; i++) {
            amountToMovePx += this.imgWidths[i];
            console.log(amountToMovePx);
        }
        amountToMovePx = amountToMovePx - this.imgWidths[amountToMove]/2;
        console.log(amountToMovePx)
        this.slider.style.left = "-" + amountToMovePx + "px";
    }
}

let carousel = new ImageCarousel(".slider");
carousel.moveToXImage(7)