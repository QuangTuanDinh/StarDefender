var GAME_ENGINE = null;
var AM = new AssetManager();
var GAME_CONTEXT = null;

DEFENDER_PROPERTIES.forEach(properties => properties.sprites.forEach(image => AM.queueDownload(properties.path + image)));
AM.queueDownload(TILE_PATH)

AM.queueDownload(BACKGROUND_PATH);
AM.downloadAll(function () {
    var canvas = document.getElementById("gameCanvas");
    var gameCtx = canvas.getContext("2d");
    GAME_CONTEXT = gameCtx;
    GAME_ENGINE = new GameEngine();
    GAME_ENGINE.init();
    GAME_ENGINE.start();
    window.addEventListener('resize', GAME_ENGINE.resize, true);
});