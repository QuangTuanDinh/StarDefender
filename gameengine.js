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
        this.portraits = [];
        this.background = null;
        this.canvasWidth = null;
        this.canvasHeight = null;
    }

    init() {
        this.background = new Background(AM.getAsset(BACKGROUND_PATH));
        this.portraitsDiv = document.getElementById('portraits');
        
        DEFENDER_PROPERTIES.forEach(defender => this.portraits.push(new Portrait(defender)));
        this.resize();
        this.timer = new Timer();

    }

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, GAME_CONTEXT.canvas);
        })();
    }

    draw() {
        GAME_CONTEXT.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        GAME_CONTEXT.save();
        this.background.draw(this.canvasWidth, this.canvasHeight);
        this.defenders.forEach(defender => defender.draw());

        
        GAME_CONTEXT.restore();
    }

    update() {
        
        

        
    }

    reset() {

    }

    pause() {

    }

    resize() {
        this.background.update();
        
        this.canvasWidth = GAME_CONTEXT.canvas.width;
        this.canvasHeight = GAME_CONTEXT.canvas.height;
        
        this.portraitsDiv.style.height = (this.portraitsDiv.clientWidth * 3 / 2) +  'px';

        this.portraits.forEach(portrait => portrait.update());

        this.background.draw(this.canvasWidth, this.canvasHeight);

        this.portraits.forEach(portrait => portrait.draw());
    }

    

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }
}

