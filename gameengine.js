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
        this.dummyDefender = null;
        this.background = null
        this.defenderInfo = null;
        this.gameCanvas = null;
        this.gameCtx = null;
        this.clockTick = 0;
        this.resize = this.resize.bind(this);
    }

    init() {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.gameCtx = this.gameCanvas.getContext('2d');
        this.defenderInfo = new DefenderInfo();
        this.control = new Control(this.portraits, this.defenderInfo, this.gameCanvas);

        var that = this;
        DEFENDER_PROPERTIES.forEach(defender => this.portraits.push(new Portrait(defender)));
        this.portraits.forEach(portrait => {
            portrait.addObserver(that.control)
            portrait.input();
        });

        this.map = new Map(AM.getAsset(BACKGROUND_PATH), AM.getAsset(TILE_PATH), this.gameCanvas);
        this.map.setMap(MAP_1);
        this.tileSize = this.map.tileSize;
        this.background = this.map.background;
        this.resize();
        this.timer = new Timer();
    }

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.gameCanvas);
        })();
    }

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    }

    setDummyDefender(theDefender) {
        this.dummyDefender = theDefender;
    }

    addDefender(theDefender) {
        if (this.map.isValid(theDefender.row, theDefender.column)) {
            this.defenders.push(theDefender);
            this.map.placeDefender(theDefender);
            return true;
        }
        return false;
    }

    draw() {
        var that = this;
        this.gameCtx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        this.gameCtx.save();
        this.map.draw();

        this.defenders.forEach(defender => defender.draw(that.gameCtx));

        this.portraits.forEach(portrait => portrait.draw());

        if(this.dummyDefender !== null) {
            this.dummyDefender.draw(this.gameCtx);
        }

        this.gameCtx.restore();
    }

    update() {
        this.defenders.forEach(defender => defender.update());
    }

    reset() {

    }

    pause() {

    }

    resize() {
        this.map.update();
        this.tileSize = this.map.tileSize;
        let portraitsDiv = document.getElementById('portraits');
        portraitsDiv.style.height = (portraitsDiv.clientWidth * 3 / 2) + 'px';
        this.defenders.forEach(defender => defender.updateScale());
        if(this.dummyDefender !== null) {
            this.dummyDefender.updateScale();
        }
        this.portraits.forEach(portrait => portrait.update());

        this.map.draw();
        this.portraits.forEach(portrait => portrait.draw());
    }
}