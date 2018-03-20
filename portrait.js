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
        this.moveEvent = this.moveEvent.bind(this);
        this.outEvent = this.outEvent.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        console.dir(this)
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
        var temp = {type: 'mouseout'};
        this.outEvent(temp);
        
        this.portraitCanvas.addEventListener('mousemove', this.moveEvent);

        
        this.portraitCanvas.addEventListener('mouseout', this.outEvent);

        
        this.portraitCanvas.addEventListener('click', this.clickEvent)
    }

    removeInput() {
        this.portraitCanvas.removeEventListener('mousemove', this.moveEvent);

        this.portraitCanvas.removeEventListener('mouseout', this.outEvent);

        this.portraitCanvas.removeEventListener('click', this.clickEvent);
    }

    moveEvent(theEvent) {
        this.notifyObservers({
            event: theEvent.type,
            object: this.getInfo()
        });
        this.isMouseIn = true;
    }

    outEvent(theEvent) {
        this.notifyObservers({
            event: theEvent.type,
            object: ''
        });
        this.isMouseIn = false;
    }

    clickEvent(theEvent) {
        this.notifyObservers({
            event: theEvent.type,
            object: ''
        })
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