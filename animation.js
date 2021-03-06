class Animation {
    constructor(spriteSheet, animationProperties) {
        this.spriteSheet = spriteSheet;
        this.frameWidth = animationProperties.frameWidth;
        this.frameDuration = animationProperties.frameDuration;
        this.frameHeight = animationProperties.frameHeight;
        this.sheetWidth = animationProperties.sheetWidth;
        this.frames = animationProperties.frames;
        this.totalTime = this.frameDuration * this.frames;
        this.loop = animationProperties.loop;
        this.scale = animationProperties.scale;
        this.elapsedTime = 1;
    }

    drawBasicAnimation(tick, ctx, x, y, border, borderColor) {
        this.elapsedTime += tick;
        if (this.isDone()) {
            if (this.loop)
                this.elapsedTime = 0;
        }
        var frame = this.currentFrame();
        var xindex = 0;
        var yindex = 0;
        xindex = frame % this.sheetWidth;
        yindex = Math.floor(frame / this.sheetWidth);
        ctx.drawImage(this.spriteSheet, xindex * this.frameWidth, yindex * this.frameHeight, // source from sheet
            this.frameWidth, this.frameHeight, x, y, this.frameWidth * this.scale, this.frameHeight * this.scale);

        if(border) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = borderColor;
            ctx.strokeRect(x, y, this.frameWidth * this.scale - 2, this.frameHeight * this.scale - 1);
        }
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }

    setScale(canvasWidth, canvasHeight) {
        this.scale = Math.max(canvasWidth, canvasHeight) / Math.max(this.frameWidth, this.frameHeight);
    }
}