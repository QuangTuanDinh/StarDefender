var BACKGROUND_PATH = './img/maps/map_0.png';
class Background {
    constructor(image) {
        this.image = image;
    }

    update() {
        GAME_CONTEXT.canvas.width = Math.min(window.innerWidth, window.innerHeight);
        GAME_CONTEXT.canvas.height = GAME_CONTEXT.canvas.width;
    }

    draw(theWidth, theHeight) {
        GAME_CONTEXT.drawImage(this.image, 0, 0, theWidth, theHeight);
    }
}