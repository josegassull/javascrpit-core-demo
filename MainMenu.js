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
            this.console.printLine("3- DELETE Vehicle");
            this.console.printLine("4- SYSTEM INFO");
            this.console.printLine("0- EXIT");
            option = await this.console.readLine();

            switch (option) {
                case "1":
                    await this.menuController.showCreateMenu();
                    break;
                case "2":
                    this.menuController.showVehicleList();
                    break;
                case "3":
                    await this.menuController.showDeleteMenu();
                    break;
                case "4":
                    await this.menuController.showSystemInfoMenu();
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