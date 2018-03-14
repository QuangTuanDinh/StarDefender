class Background {
    constructor(background) {
        this.background = background;
    }

    update() {

    }

    draw(theCtx, theWidth, theHeight) {
        theCtx.drawImage(this.background, 0, 0, theWidth, theHeight);
    }
}