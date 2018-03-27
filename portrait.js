class Portrait {
    constructor(properties) {
        this.properties = properties;
        this.hotkey = this.properties.hotkey;

        this.portraitCanvas = document.getElementById(this.properties.name.toLowerCase());
        this.portraitContext = this.portraitCanvas.getContext('2d');

        this.costElement = document.getElementById(this.properties.name.toLowerCase() + 'Cost');
        this.costElement.innerHTML = this.properties.stats.cost;

        this.hotkeyElement = document.getElementById(this.properties.name.toLowerCase() + 'Hotkey');
        this.hotkeyElement.innerHTML = this.hotkey;

        this.image = AM.getAsset(this.properties.path + 'portrait.png');
        this.animation = new Animation(this.image, this.properties.portrait);

        this.bordered = false;
        this.clicked = false;
        this.color = 'white'

        this.moveEvent = this.moveEvent.bind(this);
        this.outEvent = this.outEvent.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
    }

    update() {
        this.portraitCanvas.height = Math.max(this.portraitCanvas.clientWidth, this.portraitCanvas.clientHeight);
        this.portraitCanvas.width = this.portraitCanvas.height;
        this.animation.setScale(this.portraitCanvas.clientWidth, this.portraitCanvas.clientHeight);
    }

    draw() {
        this.animation.drawBasicAnimation(GAME_ENGINE.clockTick, this.portraitContext, 0, 0, this.bordered, this.color);
    }

    //Mouse listener for portraits
    input() {
        this.portraitCanvas.addEventListener('mousemove', this.moveEvent);

        this.portraitCanvas.addEventListener('mouseout', this.outEvent);

        this.portraitCanvas.addEventListener('click', this.clickEvent);
    }

    reset() {
        this.clicked = false;
        this.bordered = false;
        this.color = 'white';
    }

    select() {
        this.portraitCanvas.dispatchEvent(new Event('click'));
    }

    moveEvent(theEvent) {
        this.bordered = true;
        this.notifyObservers({
            event: theEvent.type,
            object: this.getInfo()
        });
    }

    outEvent(theEvent) {
        if (!this.clicked) {
            this.bordered = false;
            this.notifyObservers({
                event: theEvent.type,
                object: ''
            });
        }
    }

    clickEvent(theEvent) {
        this.notifyObservers({
            event: theEvent.type,
            object: this.properties
        });
        if (!this.bordered) {
            this.portraitCanvas.dispatchEvent(new Event('mousemove'));
        }
        this.clicked = true;
        this.color = 'green'
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