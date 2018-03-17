window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( /* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

class GameEngine {
    constructor() {
        this.defenders = [];
        this.enemies = [];
        this.portraits = [];
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.background = null
        this.clockTick = 0;
    }

    init() {
        this.background = new Background(AM.getAsset(BACKGROUND_PATH));
        this.control = new Control();
        this.defenderInfo = new DefenderInfo();
        var that = this;

        DEFENDER_PROPERTIES.forEach(defender => this.portraits.push(new Portrait(defender, that.defenderInfo)));
        this.portraits.forEach(function(portrait) {
            portrait.addObserver(that.defenderInfo);
        });
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

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }

    draw() {
        GAME_CONTEXT.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        GAME_CONTEXT.save();

        this.background.draw(this.canvasWidth, this.canvasHeight);

        this.defenders.forEach(defender => defender.draw());

        this.portraits.forEach(portrait => portrait.draw());

        GAME_CONTEXT.restore();
    }

    update() {

    }

    reset() {

    }

    pause() {

    }

    resize() {
        GAME_ENGINE.background.update();

        GAME_ENGINE.canvasWidth = GAME_CONTEXT.canvas.width;
        GAME_ENGINE.canvasHeight = GAME_CONTEXT.canvas.height;
        
        let portraitsDiv = document.getElementById('portraits');
        portraitsDiv.style.height = (portraitsDiv.clientWidth * 3 / 2) + 'px';

        GAME_ENGINE.portraits.forEach(portrait => portrait.update());

        GAME_ENGINE.background.draw(GAME_ENGINE.canvasWidth, GAME_ENGINE.canvasHeight);

        GAME_ENGINE.portraits.forEach(portrait => portrait.draw());
    }
}