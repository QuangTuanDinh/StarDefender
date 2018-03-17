//[>, >, >, ^, ^, ^, ^, >, >, >]
var TILE_PATH = './img/tiles/dirt_1.png'
class Map {
    constructor(mapArray, tileImage) {
        this.setMap(mapArray);
        this.tileImage = tileImage;
        this.tileSize = 0;
    }

    setMap(mapArray) {
        this.mapTiles = [];
        var that = this;
        for (let i = 0; i < mapArray.length; i++) {
            let tile = mapArray[i];
            this.mapTiles.push(new MapTile(tile.row, tile.column, tile.direction, mapArray.length - i));
        }
    }

    update(width) {
        this.tileSize = width / 10;
    }

    draw() {
        var that = this;
        this.mapTiles.forEach(tile => GAME_CONTEXT.drawImage(that.tileImage, that.tileSize * tile.row, that.tileSize * tile.column, that.tileSize, that.tileSize));
    }
}