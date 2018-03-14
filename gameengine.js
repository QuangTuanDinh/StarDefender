window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

class GameEngine {
    constructor() {
        this.defenders = [];
        this.enemies = [];
        this.background = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;
    }

    init(theGameCtx, theBackGround) {
        this.gameCtx = theGameCtx;
        this.background = theBackGround;
        this.surfaceWidth = this.gameCtx.canvas.width;
        this.surfaceHeight = this.gameCtx.canvas.height;
        this.timer = new Timer();
    }

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.gameCtx.canvas);
        })();
    }

    draw() {
        this.gameCtx.clearRect(0, 0, this.surfaceWidth, this.surfaceHeight);
        this.gameCtx.save();
        this.background.draw(this.gameCtx);
        this.defenders.forEach(defender => defender.draw());

        this.gameCtx.restore();
    }

    update() {

    }

    reset() {

    }

    pause() {

    }

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }
}

