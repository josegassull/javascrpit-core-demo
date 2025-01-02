class MainMenu {

    constructor(console, menuController) {
        this.console = console;
        this.menuController = new MenuController(console, this);
        this.console.printLine("VEHICLE SYSTEM", false, [46, 255, 0]);
        this.console.printLine("(JavaScript Demo)", false, [46, 255, 0]);
    }

    async showMainMenu() {
        let option;

        do {
            this.console.printLine("/////////", false, [46, 255, 0]);
            this.console.printLine("Main Menu", false, [46, 255, 0]);
            this.console.printLine("/////////", false, [46, 255, 0]);
            this.console.printLine("1- CREATE new vehicle");
            this.console.printLine("2- LIST vehicles");
            this.console.printLine("3- CHOOSE Vehicle");
            this.console.printLine("4- DELETE Vehicle");
            this.console.printLine("5- SYSTEM INFO");
            this.console.printLine("0- EXIT");
            option = await this.console.readLine();

            switch (option) {
                case "1":
                    await this.menuController.showCreateMenu();
                    option = "0";
                    break;
                case "2":
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
                    break;
                case "3":
                    this.console.printLine("Choosing Vehicle!");
                    break;
                case "4":
                    this.console.printLine("Deleting Vehicle!");
                    break;
                case "5":
                    this.console.printLine("System Info!");
                    break;
                case "0":
                    this.console.printLine("System Terminated: Goodbye!", false, [237, 23, 198]);
                    break;
                default:
                    this.console.printLine("INVALID OPTION!!!", false, [255, 31, 31]);
                    break;
            }
        } while (option !== "0");
    }

    getConsole() {
        return this.console;
    }
}

const consoleInstance = new Console();
const mainInstance = new MainMenu(consoleInstance);

document.addEventListener("DOMContentLoaded", () => {
    mainInstance.showMainMenu();
    consoleInstance.listenForEnterKey();
});