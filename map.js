var TILE_PATH = './img/tiles/dirt_1.png'
class Map {
    constructor(map, tileImage) {
        this.setupMap(map);
        this.tileImage = tileImage;
        this.tileSize = 0;
    }

    setupMap(map) {
        var layout = map.layout;
        this.mapTiles = [];
        for (let i = 0; i < layout.length; i++) {
            let newRow = []
            for (let j = 0; j < layout[i].length; j++) {
                if (layout[i][j] === 'O') {
                    newRow.push(new GroundTile());
                } else {
                    newRow.push([]);
                }
            }
            this.mapTiles.push(newRow);
        }
        var that = this;
        for (var i = 0; i < map.paths.length; i++) {
            var path = map.paths[i];
            var paths = [];
            var length = 0;
            while(Array.isArray(path[path.length - 1])) {
                let removed = path.splice(path.length - 1, 1);
                length += path.length;
                paths.push(path);
                path = removed[0];
            }
            paths.push(path);
            length += path.length;
            paths.forEach(path => path.forEach(tile => that.mapTiles[tile.row][tile.column][i] = new PathTile(length--)));
        }
    }

    update(width) {
        this.tileSize = width / this.mapTiles.length;
    }

    draw() {
        var that = this;
        for (let i = 0; i < this.mapTiles.length; i++) {
            for (let j = 0; j < this.mapTiles[i].length; j++) {
                if (!(this.mapTiles[i][j] instanceof GroundTile)) {
                    GAME_CONTEXT.drawImage(this.tileImage, this.tileSize * j, this.tileSize * i, this.tileSize, this.tileSize);
                }
            }
        }
    }
}