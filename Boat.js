class Boat extends Vehicle {
    static boatCount = 0;

    #length;

    constructor(brand, model, color, length) {
        super(brand, model, color);
        this.#length = length;

        Boat.boatCount++;
    }

    get length() {
        return this.#length;
    }

    set length(value) {
        this.#length = value;
    }

    static getBoatCount() {
        return Boat.boatCount;
    }

    async create(type, console){
        let vehicle;
        vehicle = await super.create(type, console);
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.color = vehicle.color;
        console.printLine("Insert the LENGHT OF THE BOAT...");
        this.length = await console.readLine();
        return this;
    }

    displayDetails(console) {
        console.printLine("BOAT", false, [237, 23, 198]);
        super.displayDetails(console);
        console.printLine(`Length: ${this.length} meters`, false, [237, 23, 198]);
    }
}