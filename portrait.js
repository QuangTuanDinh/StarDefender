class Portrait {
    constructor(properties) {
        this.properties = properties;
        this.canvas = document.getElementById(this.properties.name);
    }

    update() {
        this.canvas.height = this.canvas.clientHeight;
        this.canvas.width = this.canvas.height;
    }

    draw() {
        this.canvas.getContext('2d').drawImage(AM.getAsset(this.properties.path + this.properties.sprites[0]), 0, 0, this.canvas.width, this.canvas.height);
    }
}