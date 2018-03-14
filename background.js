class Background {
    constructor(background) {
        this.background = background;
    }

    update() {

    }

    draw(theCtx) {
        theCtx.drawImage(this.background, 0, 0);
    }
}