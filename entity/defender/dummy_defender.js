class DummyDefender extends Defender {
    constructor(properties) {
        super(0, 0, properties);
        this.image = AM.getAsset(this.properties.path + 'dummy.png');
        this.animation = new Animation(this.image, this.properties.dummy);
        this.drawEnabled = false;
        this.updateScale();
    }

    update(row, column) {
        this.row = row;
        this.column = column;
        this.x = column * GAME_ENGINE.tileSize + this.properties.dummy.xOffset * this.animation.scale;
        this.y = row * GAME_ENGINE.tileSize + this.properties.dummy.yOffset * this.animation.scale;
    }

    draw(gameCtx) {
        if(this.drawEnabled) {
            this.animation.drawBasicAnimation(GAME_ENGINE.clockTick, gameCtx, this.x, this.y, false);
            this.drawRange(gameCtx);
        }
    }

    updateScale() {
        this.animation.scale = this.properties.dummy.scale * (GAME_ENGINE.tileSize / 38.45);
    }
}