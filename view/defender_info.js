class DefenderInfo {
    constructor() {
        this.element = document.getElementById('defenderInfo');
    }

    setText(theText) {
        this.element.innerHTML = theText;
    }
}