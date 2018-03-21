class Control {
    constructor(portraits, defenderInfo, gameCanvas) {
        this.container = document.getElementById('container');
        this.gameCanvas = gameCanvas;
        this.defenderInfo = defenderInfo;
        this.portraits = portraits;
        this.selectedDefender = null;
        this.selected = false;
        this.contextEvent = this.contextEvent.bind(this)
        this.moveEvent = this.moveEvent.bind(this);
        this.outEvent = this.outEvent.bind(this);
        this.input();
    }

    input() {
        this.container.addEventListener('contextmenu', this.contextEvent);
        this.gameCanvas.addEventListener('mousemove', this.moveEvent);
        this.gameCanvas.addEventListener('mouseout', this.outEvent);
    }

    contextEvent(theEvent) {
        theEvent.preventDefault();
        this.portraits.forEach(portrait => portrait.enableInput());
        this.selected = false;
        GAME_ENGINE.setDummyDefender(null);
    }

    portraitControl(theObject) {
        if (theObject.event === 'mousemove' || theObject.event === 'mouseout') {
            this.defenderInfo.setText(theObject.object)
        } else if (theObject.event === 'click') {
            this.portraits.forEach(portrait => portrait.disableInput());
            this.selected = true;
            this.selectedDefender = new DummyDefender(theObject.object);
            GAME_ENGINE.setDummyDefender(this.selectedDefender);
        }
    }

    moveEvent(theEvent) {
        if(this.selected) {
            var x = theEvent.clientX - this.gameCanvas.getBoundingClientRect().left;
            var y = theEvent.clientY - this.gameCanvas.getBoundingClientRect().top;
            this.selectedDefender.drawEnabled = true;
            this.selectedDefender.update(x, y);
        }
    }

    outEvent(theEvent) {
        if(this.selected) {
            this.selectedDefender.drawEnabled = false;
        }
    }

    pause() {

    }

    reset() {

    }

    update(theObservable, theObject) {
        if (theObservable instanceof Portrait) {
            this.portraitControl(theObject);
        }
    }
}

Object.assign(Control.prototype, Observable);
// startInput() {
//     console.log('Starting input');
//     var getXandY = function (e) {
//         var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
//         var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;
//         if (x < 1024) {
//             x = Math.floor(x / 32);
//             y = Math.floor(y / 32);
//         }
//         return { x: x, y: y };
//     };
//     var that = this;
//     // event listeners are added here
//     this.ctx.canvas.addEventListener("click", function (e) {
//         that.click = getXandY(e);
//         console.log(e);
//         console.log("Left Click Event - X,Y " + e.clientX + ", " + e.clientY);
//     }, false);
//     this.ctx.canvas.addEventListener("contextmenu", function (e) {
//         that.click = getXandY(e);
//         console.log(e);
//         console.log("Right Click Event - X,Y " + e.clientX + ", " + e.clientY);
//         e.preventDefault();
//     }, false);
//     this.ctx.canvas.addEventListener("mousemove", function (e) {
//         //console.log(e);
//         that.mouse = getXandY(e);
//     }, false);
//     this.ctx.canvas.addEventListener("mousewheel", function (e) {
//         console.log(e);
//         that.wheel = e;
//         console.log("Click Event - X,Y " + e.clientX + ", " + e.clientY + " Delta " + e.deltaY);
//     }, false);
//     this.ctx.canvas.addEventListener("keydown", function (e) {
//         console.log(e);
//         console.log("Key Down Event - Char " + e.code + " Code " + e.keyCode);
//     }, false);
//     this.ctx.canvas.addEventListener("keypress", function (e) {
//         if (e.code === "KeyD")
//             that.d = true;
//         that.chars[e.code] = true;
//         console.log(e);
//         console.log("Key Pressed Event - Char " + e.charCode + " Code " + e.keyCode);
//     }, false);
//     this.ctx.canvas.addEventListener("keyup", function (e) {
//         console.log(e);
//         console.log("Key Up Event - Char " + e.code + " Code " + e.keyCode);
//     }, false);
//     console.log('Input started');
// }