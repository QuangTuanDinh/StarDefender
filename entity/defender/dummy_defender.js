class DummyDefender extends Entity {
    constructor(properties) {
        super(properties);
        this.image = AM.getAsset(this.properties.path + 'dummy.png');
        this.animation = new Animation(this.image, this.properties.dummy);
        this.drawEnabled = false;
    }

    update(mouseX, mouseY) {
        this.x = mouseX - this.properties.dummy.xOffset * this.properties.dummy.scale;
        this.y = mouseY - this.properties.dummy.yOffset * this.properties.dummy.scale;
    }

    draw(gameCtx) {
        if(this.drawEnabled) {
            this.animation.drawBasicAnimation(GAME_ENGINE.clockTick, gameCtx, this.x, this.y, false);
        }
    }
}