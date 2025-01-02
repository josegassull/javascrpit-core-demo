class Car extends Vehicle {
    static carCount = 0;

    #numberOfDoors;

    constructor(brand, model, color, numberOfDoors) {
        super(brand, model, color);
        this.#numberOfDoors = numberOfDoors;

        Car.carCount++;
    }

    get numberOfDoors() {
        return this.#numberOfDoors;
    }

    set numberOfDoors(value) {
        this.#numberOfDoors = value;
    }

    static getCarCount() {
        return Car.carCount;
    }

    async create(type, console){
        let vehicle;
        vehicle = await super.create(type, console);
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.color = vehicle.color;
        console.printLine("Insert the NUMBER OF DOORS...");
        this.numberOfDoors = await console.readLine();
        return this;
    }

    displayDetails(console) {
        console.printLine("CAR", false, [237, 23, 198]);
        super.displayDetails(console);
        console.printLine(`Number of Doors: ${this.numberOfDoors}`, false, [237, 23, 198]);
    }
}