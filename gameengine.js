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
        this.background = null
        this.clockTick = 0;
    }

    init() {
        this.control = new Control();
        this.defenderInfo = new DefenderInfo();

        var that = this;
        DEFENDER_PROPERTIES.forEach(defender => this.portraits.push(new Portrait(defender, that.defenderInfo)));
        this.portraits.forEach(portrait => portrait.addObserver(that.defenderInfo));

        this.map = new Map(AM.getAsset(BACKGROUND_PATH), AM.getAsset(TILE_PATH));
        this.map.setMap(MAP_1);

        this.background = this.map.background;
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
        GAME_CONTEXT.clearRect(0, 0, GAME_CONTEXT.canvas.width, GAME_CONTEXT.canvas.height);
        GAME_CONTEXT.save();
        this.map.draw()
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
        GAME_ENGINE.map.update();

        let portraitsDiv = document.getElementById('portraits');
        portraitsDiv.style.height = (portraitsDiv.clientWidth * 3 / 2) + 'px';

        GAME_ENGINE.portraits.forEach(portrait => portrait.update());

        GAME_ENGINE.map.draw();
        GAME_ENGINE.portraits.forEach(portrait => portrait.draw());
    }
}