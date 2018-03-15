class Portrait {
    constructor(properties, infoElement) {
        this.properties = properties;
        this.portraitCanvas = document.getElementById(this.properties.name);
        this.costElement = document.getElementById(this.properties.name + 'Cost');
        this.costElement.innerHTML = this.properties.cost;
        
        this.input(infoElement);
    }

    update() {
        this.portraitCanvas.height = this.portraitCanvas.clientHeight;
        this.portraitCanvas.width = this.portraitCanvas.height;
    }

    draw() {
        this.portraitCanvas.getContext('2d').drawImage(AM.getAsset(this.properties.path + this.properties.sprites[0]), 0, 0, this.portraitCanvas.width, this.portraitCanvas.height);
    }

    //Mouse listener for portraits
    input(infoElement) {
        var that = this;
        this.portraitCanvas.addEventListener('mousemove', function(event) {
            infoElement.select(that.properties);
        })
    }
}