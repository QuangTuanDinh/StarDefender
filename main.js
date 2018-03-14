var gameEngine = new GameEngine();
var AM = new AssetManager();
AM.queueDownload("./img/defenders/marine/marine.png");
AM.queueDownload("./img/maps/map_0.png");
AM.downloadAll(function () {
    var canvas = document.getElementById("gameCanvas");
    var gameCtx = canvas.getContext("2d");
    let background = new Background(AM.getAsset("./img/maps/map_0.png"));
    gameEngine.init(gameCtx, background);
    gameEngine.start();
});