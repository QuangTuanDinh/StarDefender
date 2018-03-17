let Observable = {
    observers: [],
    addObserver(theObserver) {
        this.observers.push(theObserver);
    },
    removeObserver(theObserver) {
        let index = this.observers.indexOf(theObserver);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    },
    notifyObservers(theObject) {
        var that = this;
        this.observers.forEach(observer => observer.update(that, theObject));
    }
}