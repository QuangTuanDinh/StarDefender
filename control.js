class Control {
    constructor(portraits, defenderInfo, gameCanvas) {
        this.container = document.getElementById('container');
        this.gameCanvas = gameCanvas;
        this.defenderInfo = defenderInfo;
        this.portraits = portraits;
        this.selectedDefender = null;
        this.contextEvent = this.contextEvent.bind(this);
        this.moveEvent = this.moveEvent.bind(this);
        this.outEvent = this.outEvent.bind(this);
        this.keyEvent = this.keyEvent.bind(this);
        this.containerMoveEvent = this.containerMoveEvent.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.dblclickEvent = this.dblclickEvent.bind(this);
        this.input();
    }

    input() {
        this.container.addEventListener('contextmenu', this.contextEvent);
        this.container.addEventListener('mousemove', this.containerMoveEvent);
        this.container.addEventListener('keydown', this.keyEvent);
        this.gameCanvas.addEventListener('mousemove', this.moveEvent);
        this.gameCanvas.addEventListener('mouseout', this.outEvent);
        this.gameCanvas.addEventListener('click', this.clickEvent);
        this.gameCanvas.addEventListener('dblclick', this.dblclickEvent);
    }

    contextEvent(theEvent) {
        theEvent.preventDefault();
        this.portraits.forEach(portrait => portrait.reset());
        if (this.selectedDefender) {
            this.selectedDefender.rangeIndicatorEnabled = false;
            this.selectedDefender = null;
        }
        GAME_ENGINE.setDummyDefender(null);
    }

    portraitControl(theObservable, theObject) {
        if (theObject.event === 'mousemove' || theObject.event === 'mouseout') {
            this.defenderInfo.setText(theObject.object)
        } else if (theObject.event === 'click') {
            this.portraits.forEach(portrait => portrait.reset());
            this.container.dispatchEvent(new Event('contextmenu'));
            this.selectedDefender = new DummyDefender(theObject.object);
            GAME_ENGINE.setDummyDefender(this.selectedDefender);
        }
    }

    moveEvent(theEvent) {
        if (this.selectedDefender instanceof DummyDefender) {
            var row = Math.floor((theEvent.clientY - this.gameCanvas.getBoundingClientRect().top) / GAME_ENGINE.tileSize);
            var column = Math.floor((theEvent.clientX - this.gameCanvas.getBoundingClientRect().left) / GAME_ENGINE.tileSize);
            this.selectedDefender.drawEnabled = true;
            if (GAME_ENGINE.map.isValid(row, column)) {
                this.selectedDefender.update(row, column);
            }
        }
    }

    outEvent(theEvent) {
        if (this.selectedDefender) {
            this.selectedDefender.drawEnabled = false;
        }
    }

    clickEvent(theEvent) {
        var row = Math.floor((theEvent.clientY - this.gameCanvas.getBoundingClientRect().top) / GAME_ENGINE.tileSize);
        var column = Math.floor((theEvent.clientX - this.gameCanvas.getBoundingClientRect().left) / GAME_ENGINE.tileSize);
        if (this.selectedDefender instanceof DummyDefender) {
            var defender = null;
            //if (this.selectedDefender.properties.name === 'ghost' || this.selectedDefender.properties.name === 'marine') {
            defender = new StaticDefender(this.selectedDefender.row, this.selectedDefender.column, this.selectedDefender.properties);
            //}
            GAME_ENGINE.addDefender(defender);
            this.container.dispatchEvent(new Event('contextmenu'))
        } else {
            if (this.selectedDefender) {
                this.container.dispatchEvent(new Event('contextmenu'));
            }
            this.selectedDefender = GAME_ENGINE.map.selectDefender(row, column);
            if (this.selectedDefender) {
                this.selectedDefender.rangeIndicatorEnabled = true;
            }
        }
    }

    dblclickEvent(theEvent) {

    }

    keyEvent(theEvent) {
        var that = this;
        if (theEvent.key === 'Escape') {
            this.container.dispatchEvent(new Event('contextmenu'));
        } else {
            this.portraits.forEach(portrait => {
                if (theEvent.key === portrait.hotkey) {
                    portrait.select();
                    that.selectedDefender.drawEnabled = true;
                    that.selectedDefender.update(that.x - that.gameCanvas.getBoundingClientRect().left,
                        that.y - that.gameCanvas.getBoundingClientRect().top)
                }
            });
        }
    }

    containerMoveEvent(theEvent) {
        this.container.focus();
        this.x = theEvent.clientX;
        this.y = theEvent.clientY;
    }

    pause() {

    }

    reset() {

    }

    update(theObservable, theObject) {
        if (theObservable instanceof Portrait) {
            this.portraitControl(theObservable, theObject);
        }
    }
}

Object.assign(Control.prototype, Observable);