class Vehicle {
    static vehicleCount = 0;
    static listOfVehicles = [];

    #brand;
    #model;
    #color;

    constructor(brand, model, color) {
        if (new.target === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle.");
        }

        this.#brand = brand || "";
        this.#model = model || "";
        this.#color = color || "";

        Vehicle.vehicleCount++;
    }

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        this.#model = value;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    static getVehicleCount() {
        return Vehicle.vehicleCount;
    }

    static getListOfVehicles(){
        return Vehicle.listOfVehicles;
    }

    async create(type, console){

        let brand;
        let model;
        let color;
        console.printLine("Insert the BRAND...");
        brand = await console.readLine();
        console.printLine("Insert the MODEL...");
        model = await console.readLine();
        console.printLine("Insert the COLOR...");
        color = await console.readLine();

        switch(type){
            case "1":
                let car;
                car = new Car(brand, model, color);
                return car;
                break;
            case "2":
                let plane;
                plane = new Plane(brand, model, color);
                return plane;
                break;
            case "3":
                let boat;
                boat = new Boat(brand, model, color);
                return boat;
                break;
        }
    }

    displayDetails(console) {
        console.printLine(`Brand: ${this.brand}`, false, [237, 23, 198]);
        console.printLine(`Model: ${this.model}`, false, [237, 23, 198]);
        console.printLine(`Color: ${this.color}`, false, [237, 23, 198]);
    }
}