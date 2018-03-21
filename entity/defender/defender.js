class Defender extends Entity {
    constructor(row, column, properties) {
        super(properties);
        this.row = row;
        this.column = column;
    }

    isEnoughResource(theCurrentResource) {
        return this.properties.cost < theCurrentResource;
    }
}
