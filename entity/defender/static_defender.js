class StaticDefender extends Defender {
    constructor(row, column, properties) {
        super(row, column, properties);
        this.animation = new Animation(AM.getAsset(this.properties.path + 'idle.png'), this.properties.idle);
        this.updateScale();
    }

    update() {
        this.x = this.column * GAME_ENGINE.tileSize + this.properties.idle.xOffset * this.animation.scale;
        this.y = this.row * GAME_ENGINE.tileSize + this.properties.idle.yOffset * this.animation.scale;
    }

    draw(gameCtx) {
        this.animation.drawBasicAnimation(GAME_ENGINE.clockTick, gameCtx, this.x, this.y, false);
        if (this.rangeIndicatorEnabled) {
            this.drawRange(gameCtx);
        }
    }

    updateScale() {
        this.animation.scale = this.properties.dummy.scale * (GAME_ENGINE.tileSize / 38.45);
    }
}