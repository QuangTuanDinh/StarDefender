class Portrait {
    constructor(properties) {
        this.properties = properties;
        this.portraitCanvas = document.getElementById(this.properties.name.toLowerCase());
        this.portraitContext = this.portraitCanvas.getContext('2d');

        this.costElement = document.getElementById(this.properties.name.toLowerCase() + 'Cost');
        this.costElement.innerHTML = this.properties.stats.cost;

        this.hotkeyElement = document.getElementById(this.properties.name.toLowerCase() + 'Hotkey');
        this.hotkeyElement.innerHTML = this.properties.hotkey;

        this.image = AM.getAsset(this.properties.path + 'portrait.png');
        this.animation = new Animation(this.image, this.properties.portrait);

        this.isMouseIn = false;
        this.input();
    }

    update() {
        this.portraitCanvas.height = Math.max(this.portraitCanvas.clientWidth, this.portraitCanvas.clientHeight);
        this.portraitCanvas.width = this.portraitCanvas.height;
        this.animation.setScale(this.portraitCanvas.clientWidth, this.portraitCanvas.clientHeight);
    }

    draw() {
        this.animation.drawPortraitAnimation(GAME_ENGINE.clockTick, this.portraitContext, 0, 0, this.isMouseIn);
    }

    //Mouse listener for portraits
    input() {
        var that = this;
        this.portraitCanvas.addEventListener('mousemove', function (event) {
            that.notifyObservers(that.getInfo());
            that.isMouseIn = true;
        })

        this.portraitCanvas.addEventListener('mouseout', function (event) {
            that.notifyObservers('');
            that.isMouseIn = false;
        });
    }

    getInfo() {
        return '<b>' + this.properties.name.toUpperCase() + '</b>' +
                                '<br>' +
                                '<br>' + this.properties.description +
                                '<br>' +
                                '<br>Cost: ' + this.properties.stats.cost +
                                '<br>Range: ' + this.properties.stats.range +
                                '<br>Damage: ' + this.properties.stats.damage +
                                '<br>Coodown: ' + this.properties.stats.cooldown +
                                '<br>Hotkey: ' + this.properties.hotkey.toUpperCase();
    }
}

Object.assign(Portrait.prototype, Observable);