class Console {
    constructor() {
        this.consoleElement = document.getElementById("console");
        this.inputElement = document.getElementById("userInput");
        this.inputPromiseResolve = null; // Holds the resolve function of the promise
    }

    printLine(message, isUserInput = false, rgb = null) {
        const span = document.createElement("span");
        span.textContent = message + "\n";
    
        // Apply custom color if provided, otherwise fall back to user input or default color
        if (rgb) {
            span.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        } else if (isUserInput) {
            span.style.color = "rgb(31, 221, 255)"; // Default color for user input
        }
    
        this.consoleElement.appendChild(span);
        this.consoleElement.scrollTop = this.consoleElement.scrollHeight; // Automatic scroll down
    }

    async readLine() {
        return new Promise((resolve) => {
            this.inputPromiseResolve = resolve; // Store the resolve function
        });
    }

    handleUserInput() {
        const userInput = this.inputElement.value.trim();

        this.printLine("> " + userInput, true); // Show user input in default user-input color
        this.inputElement.value = ""; // Clear input
        this.inputElement.focus();

        if (this.inputPromiseResolve) {
            this.inputPromiseResolve(userInput); // Resolve the promise
            this.inputPromiseResolve = null; // Reset the resolve function
        }
    }

    listenForEnterKey() {
        this.inputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.handleUserInput();
            }
        });
    }
}