class Defender extends Entity {
    constructor(row, column, properties) {
        super(properties);
        this.row = row;
        this.column = column;
        this.x = this.column * GAME_ENGINE.tileSize;
        this.y = this.row * GAME_ENGINE.tileSize;
        this.rangeIndicatorEnabled = false;
    }

    isEnoughResource(theCurrentResource) {
        return this.properties.cost < theCurrentResource;
    }

    drawRange(gameCtx) {
        gameCtx.beginPath();
        gameCtx.arc(this.column * GAME_ENGINE.tileSize + GAME_ENGINE.tileSize / 2, this.row * GAME_ENGINE.tileSize + GAME_ENGINE.tileSize / 2, this.properties.stats.range * GAME_ENGINE.tileSize, 0, 2 * Math.PI);
        gameCtx.strokeStyle = 'green';
        gameCtx.stroke();
        gameCtx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        gameCtx.fill();
    }
}
