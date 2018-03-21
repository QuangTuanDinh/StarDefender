var BACKGROUND_PATH = './img/maps/map_0.png';
class Background {
    constructor(image, gameCanvas) {
        this.image = image;
        this.gameCanvas = gameCanvas;
    }

    update() {
        this.gameCanvas.width = Math.min(window.innerWidth, window.innerHeight);
        this.gameCanvas.height = this.gameCanvas.width;
    }

    draw(gameCtx) {
        gameCtx.drawImage(this.image, 0, 0, this.gameCanvas.width, this.gameCanvas.height);
    }
}