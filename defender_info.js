class DefenderInfo {
    constructor() {
        this.element = document.getElementById('defenderInfo');
    }

    cancle() {
        this.element.innerHTML = '';
    }

    select(properties) {
        this.element.innerHTML = properties.name + 
                                '<br>Cost: ' + properties.cost +
                                '<br>Range: ' + properties.range +
                                '<br>Damage: ' + properties.damage;
    }
}