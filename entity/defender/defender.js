class Defender extends Entity {
    constructor(row, column, properties) {
        super(row, column, properties);
    }

    isEnoughResource(theCurrentResource) {
        return this.properties.cost < theCurrentResource;
    }
}
