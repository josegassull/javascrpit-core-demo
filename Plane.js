class Plane extends Vehicle {
    static planeCount = 0;

    #wingspan;

    constructor(brand, model, color, wingspan) {
        super(brand, model, color);
        this.#wingspan = wingspan;

        Plane.planeCount++;
    }

    get wingspan() {
        return this.#wingspan;
    }

    set wingspan(value) {
        this.#wingspan = value;
    }

    static getPlaneCount() {
        return Plane.planeCount;
    }

    async create(type, console){
        let vehicle;
        vehicle = await super.create(type, console);
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.color = vehicle.color;
        console.printLine("Insert the WINGSPAN...");
        this.wingspan = await console.readLine();
        return this;
    }

    displayDetails(console) {
        console.printLine("PLANE", false, [237, 23, 198]);
        super.displayDetails(console);
        console.printLine(`Wingspan: ${this.wingspan} meters`, false, [237, 23, 198]);
    }
}