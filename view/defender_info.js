class DefenderInfo {
    constructor() {
        this.element = document.getElementById('defenderInfo');
    }

    update(theObservable, theObject) {
        if(theObservable instanceof Portrait) {
            this.element.innerHTML = theObject;
        }
    }
}