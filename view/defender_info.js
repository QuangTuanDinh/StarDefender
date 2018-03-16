class DefenderInfo {
    constructor() {
        this.element = document.getElementById('defenderInfo');
    }

    cancle() {
        this.element.innerHTML = '';
    }

    select(properties) {
        let stats = properties.stats;
        this.element.innerHTML = '<b>' + properties.name.toUpperCase() + '</b>' +
                                '<br>' +
                                '<br>' + properties.description +
                                '<br>' +
                                '<br>Cost: ' + stats.cost +
                                '<br>Range: ' + stats.range +
                                '<br>Damage: ' + stats.damage +
                                '<br>Coodown: ' + stats.cooldown +
                                '<br>Hotkey: ' + properties.hotkey.toUpperCase();
                                
    }
}