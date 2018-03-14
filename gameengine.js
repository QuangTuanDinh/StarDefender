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
        this.canvasWidth = null;
        this.canvasHeight = null;
    }

    init(theGameCtx, theBackGround) {
        this.gameCtx = theGameCtx;
        this.background = theBackGround;
        this.canvasWidth = this.gameCtx.canvas.width;
        this.canvasHeight = this.gameCtx.canvas.height;
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
        this.gameCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.gameCtx.save();
        this.background.draw(this.gameCtx, this.canvasWidth, this.canvasHeight);
        this.defenders.forEach(defender => defender.draw());

        this.gameCtx.restore();
    }

    update() {
        this.resize();
    }

    reset() {

    }

    pause() {

    }

    resize() {
        this.gameCtx.canvas.width = Math.min(window.innerWidth, window.innerHeight);
        this.gameCtx.canvas.height = this.gameCtx.canvas.width;
        this.canvasWidth = this.gameCtx.canvas.width;
        this.canvasHeight = this.gameCtx.canvas.height;
    }

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }
}

