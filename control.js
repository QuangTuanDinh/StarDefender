class Control {
    constructor(defenderInfo) {
        this.element = document.getElementById('container');
        this.defenderInfo = defenderInfo;
        this.input();
    }

    input() {
        var that = this;
        this.element.addEventListener('click', function(event) {

        })

        this.element.addEventListener('contextmenu', function (event) {
            event.preventDefault(); //prevent right click from opening context menu
            that.defenderInfo.element.innerHTML = '';
        })
    }
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

    pause() {

    }

    reset() {
        
    }
}