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
}