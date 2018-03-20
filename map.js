class Map {
    constructor(backgroundImage, tileImage) {
        this.background = new Background(backgroundImage);
        this.tileImage = tileImage;
        this.tileSize = 0;
        this.paths = [];
        this.mapTiles = [];
    }

    setMap(map) {
        var layout = map.layout;
        for (let i = 0; i < layout.length; i++) {
            let newRow = []
            for (let j = 0; j < layout[i].length; j++) {
                if (layout[i][j] === 'O') {
                    newRow.push(new GroundTile());
                } else {
                    newRow.push({});
                }
            }
            this.mapTiles.push(newRow);
        }
        var that = this;
        for (var i = 0; i < map.paths.length; i++) {
            var path = map.paths[i];
            var paths = [];
            while (Array.isArray(path[path.length - 1])) {
                let removed = path.splice(path.length - 1, 1);
                paths.push(path);
                path = removed[0];
            }
            paths.push(path);

            path = paths[0];
            for (let j = 1; j < paths.length; j++) {
                path = path.concat(paths[j]);
            }

            for (let j = 0; j < path.length; j++) {
                let tile = path[j];
                if (!(this.mapTiles[tile.row][tile.column] instanceof PathTile)) {
                    this.mapTiles[tile.row][tile.column] = new PathTile(path.length - j, this.tileImage);
                } else {
                    this.mapTiles[tile.row][tile.column].weight.push(path.length - j);
                }

            }
            this.paths.push(path);
        }
    }

    update() {
        this.background.update();
        this.tileSize = GAME_CONTEXT.canvas.width / this.mapTiles.length;
    }

    draw() {
        this.background.draw();
        this.drawPath();
    }

    drawPath() {
        for (let i = 0; i < this.mapTiles.length; i++) {
            for (let j = 0; j < this.mapTiles[i].length; j++) {
                if (!(this.mapTiles[i][j] instanceof GroundTile)) {
                    GAME_CONTEXT.drawImage(this.tileImage, this.tileSize * j, this.tileSize * i, this.tileSize, this.tileSize);
                }
            }
        }
    }
}