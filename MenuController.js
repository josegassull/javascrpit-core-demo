class MenuController {

    constructor(console, mainMenu){
        this.console = console;
        this.mainMenu = mainMenu;
    }

    async showCreateMenu() {

        let option;

        do{
            
            this.console.printLine("CREATING VEHICLE", false, [46, 255, 0]);
            this.console.printLine("1- Car");
            this.console.printLine("2- Plane");
            this.console.printLine("3- Boat");
            this.console.printLine("0- Main Menu");
            option = await this.console.readLine();

            switch (option) {
                case "1":
                    this.console.printLine("CREATING A CAR", false, [46, 255, 0]);
                    let car = new Car();
                    car = await car.create("1", this.console);
                    this.console.printLine("YOU CREATED A NEW CAR!", false, [237, 23, 198]);
                    Vehicle.listOfVehicles.push(car);
                    car.displayDetails(this.console);
                    break;
                case "2":
                    this.console.printLine("CREATING A PLANE", false, [46, 255, 0]);
                    let plane = new Plane();
                    plane = await plane.create("2", this.console);
                    this.console.printLine("YOU CREATED A NEW PLANE!", false, [237, 23, 198]);
                    Vehicle.listOfVehicles.push(plane);
                    plane.displayDetails(this.console);
                    break;
                case "3":
                    this.console.printLine("CREATING A BOAT", false, [46, 255, 0]);
                    let boat = new Boat();
                    boat = await boat.create("3", this.console);
                    this.console.printLine("YOU CREATED A NEW BOAT!", false, [237, 23, 198]);
                    Vehicle.listOfVehicles.push(boat);
                    boat.displayDetails(this.console);
                    break;
                case "0":
                    this.console.printLine("Returning to Main Menu...", false, [237, 23, 198]);
                    break;
                default:
                    this.console.printLine("INVALID OPTION!!!", false, [255, 31, 31]);
                    break;
            }
        }while(option != "0" && option != "1" && option != "2" && option != "3");
        await this.mainMenu.showMainMenu();
    }

    showVehicleList() {
        const vehicles = Vehicle.getListOfVehicles();
        if (vehicles.length === 0) {
            this.console.printLine("No vehicles created yet!", false, [255, 31, 31]);
        } else {
            this.console.printLine("SHOWING LIST OF VEHICLES", false, [46, 255, 0]);
            vehicles.forEach((vehicle, index) => {
                this.console.printLine(`Vehicle ${index + 1}:`, false, [46, 255, 0]);
                vehicle.displayDetails(this.console);
            });
        }
    }

    async showDeleteMenu() {
        const vehicles = Vehicle.getListOfVehicles();

        if (vehicles.length === 0) {
            this.console.printLine("No vehicles available to delete!", false, [255, 31, 31]);
            return;
        }

        this.console.printLine("DELETING VEHICLE", false, [255, 100, 100]);
        this.showVehicleList(); 

        let option;
        do {
            this.console.printLine("Select the vehicle number to delete or enter 0 to return to the Main Menu:");
            option = await this.console.readLine();
            const index = parseInt(option, 10) - 1;

            if (option === "0") {
                this.console.printLine("Returning to Main Menu...", false, [237, 23, 198]);
                return;
            }

            if (index >= 0 && index < vehicles.length) {
                this.console.printLine(`ABOUT TO DELETE VEHICLE NUMBER ${index + 1}`, false, [255, 100, 100]);
                this.console.printLine("1- DELETE");
                this.console.printLine("0- CANCEL");

                const confirm = await this.console.readLine();
                if (confirm === "1") {
                    vehicles.splice(index, 1);
                    this.console.printLine("Vehicle deleted successfully!", false, [46, 255, 0]);
                } else {
                    this.console.printLine("Deletion cancelled.", false, [255, 31, 31]);
                }
                break;
            } else {
                this.console.printLine("Invalid vehicle number. Try again.", false, [255, 31, 31]);
            }
        } while (option !== "0");

        this.console.printLine("Returning to Main Menu...", false, [237, 23, 198]);
    }

    async showSystemInfoMenu(){
        this.console.printLine("SYSTEM INFO:", false, [46, 255, 0]);
        this.console.printLine("This is a simple demo that was created with the purpose of showcasing some core concepts of JavaScript.", false, [237, 23, 198]);
        this.console.printLine("The System of Vehicle Creation doesn't do much and it's not important perse; but what I intend to do is to create an example of core concepts and features of OOP JavaScript that can be observed in the code files of this program.", false, [237, 23, 198]);
        this.console.printLine("Created by José Gassull.", false, [237, 23, 198]);
    }
}