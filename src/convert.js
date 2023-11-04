let isDecimalInput = true;

const inputField = document.getElementById("inputValue");
const resultText = document.getElementById("result");

function parseInput(inputString) {
    // Split the input string into individual units
    const units = inputString.split(' ');

    // Check if there are exactly 4 units
    if (units.length !== 4) {
        console.log("Invalid input: Not enough units.");
        return;
    }

    // Initialize tuples
    const tupleA = { major: '', minor: '' };
    const tupleX = { major: '', minor: '' };
    const tupleY = { major: '', minor: '' };
    const tupleZ = { major: '', minor: '' };

    // Helper function to parse a unit into major and minor parts
    function parseUnit(unit, tuple) {
        const parts = unit.split('.');
        if (parts.length === 2) {
            tuple.major = parts[0];
            tuple.minor = parts[1];
        }
    }

    // Parse each unit
    parseUnit(units[0], tupleA);
    parseUnit(units[1], tupleX);
    parseUnit(units[2], tupleY);
    parseUnit(units[3], tupleZ);

    // Check the value of a and generate the output accordingly
    const a = parseInt(tupleA.minor);
    if (a === 1) {
        resultText.textContent = `DWS Area:${tupleA.major} Teir:${tupleZ.major}.${tupleZ.minor} Street:${tupleX.major}.2 Position:${tupleY.major}.${tupleY.minor}`;
    } else if (a === 2) {
        resultText.textContent = `Deck Area:${tupleA.major} Teir:${tupleZ.major}.${tupleZ.minor} Street:${tupleY.major}.2 Avenue:${tupleX.major}.2`;
    } else if (a === 4) {
        resultText.textContent = `Area:${tupleA.major} Aisle:${tupleX.major} Teir:${tupleZ.major}.${tupleZ.minor} Bay:${tupleY.major}.${tupleY.minor}`;
    } else {
        resultText.textContent = "Invalid area";
    }
}


//document.getElementById("convertButton").addEventListener("click", parseInput);

document.getElementById("convertButton").addEventListener("click", function () {
    const inputString = inputField.value; // Get the value from the input field
    parseInput(inputString); // Pass the input to the parseInput function
});

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        performConversion();
    }
});

document.getElementById("toggleButton").addEventListener("click", function () {
    isDecimalInput = !isDecimalInput;
    inputField.value = "";
    resultText.textContent = "";
    inputField.placeholder = isDecimalInput ? "Enter a UCC value" : "Function not defined";
});