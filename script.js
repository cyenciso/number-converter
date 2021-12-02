// select convert to and from dropdowns 
let convertFromDropDown = document.getElementById("converter-from-dropdown");
let convertToDropDown = document.getElementById("converter-to-dropdown");
// listen for a change in "convert from" dropdown
convertFromDropDown.addEventListener("change", converterOptionChange);

// select converter button
let converterButton = document.getElementById("converter-button");

// variable that keeps track of the current conversion
let conversion;

// listen for button click and change state
converterButton.addEventListener("click", detectConversion);

// #2. conversions to do: 
    // decimal to binary

    // binary to hex
    // hex to binary

    // hex to decimal
    // decimal to hex

// #3. random value generator logic and correct answer

/* this function checks the dropdowns for the currect conversion */
function detectConversion(e) {
    // prevent form submission
    e.preventDefault();

    // select dropdown elements
    let binaryOptionFrom = convertFromDropDown.firstElementChild;
    let hexOptionFrom = convertFromDropDown.lastElementChild;

    // if binary selected
    if (binaryOptionFrom.selected) {
        // check if either decimal or hex is selected
        let decimalOptionTo = convertToDropDown.firstElementChild;
        if (decimalOptionTo.selected) {
            conversion = "bd";
        } else {
            conversion = "bh";
        }
    } 
    // if hex selected
    else if (hexOptionFrom.selected) {
        // check if either binary or decimal is selected
        let binaryOptionTo = convertToDropDown.firstElementChild;
        if (binaryOptionTo.selected) {
            conversion = "hb";
        } else {
            conversion = "hd";
        }
    }
    // decimal selected
    else {
        // check if either binary or hex is selected
        let binaryOptionTo = convertToDropDown.firstElementChild;
        if (binaryOptionTo.selected) {
            conversion = "db";
        } else {
            conversion = "dh";
        }
    }

    // call appropriate conversion function
    // if "from" is binary
    if (conversion[0] == "b") {
        // and if "to" is decimal
        if (conversion[1] == "d") {
            binaryToDecimal();
        }
        // and if "to" is hex
        else {

        }
    } 
    // if "from" is decimal
    else if (conversion[0] == "d") {
        // and if "to" is binary
        if (conversion[1] == "b") {
            binaryToDecimal();
        }
        // and if "to" is hex
        else {
            
        }
    }
    // if "from" is hex
    else {
        // and if "to" is binary
        if (conversion[1] == "b") {
            binaryToDecimal();
        }
        // and if "to" is decimal
        else {
            
        }
    }
}

/* This function makes sure that if one dropdown has a value, the other dropdown isn't doesn't have the same value */
function converterOptionChange() {
    let binaryOptionFrom = convertFromDropDown.firstElementChild;
    let hexOptionFrom = convertFromDropDown.lastElementChild;
    
    // remove all children from "convert to" dropdown
    let children = convertToDropDown.children;

    // no need to increment i because of element removal each iteration
    for (let i = 0; i < children.length; ) {
        children[i].remove();
    }
    console.log(children);
    // if the first child of convertFromDropDown is selected
    if (binaryOptionFrom.selected) {
        // create decimal and hex options in "convert to" dropdown
        let decimalOptionTo = document.createElement("option");
        decimalOptionTo.textContent = "Decimal";
    
        let hexOptionTo = document.createElement("option");
        hexOptionTo.textContent = "Hexadecimal";
    
        // append to DOM
        convertToDropDown.appendChild(decimalOptionTo);
        convertToDropDown.appendChild(hexOptionTo);
        
    } 
    // else if the last child is selected
    else if (hexOptionFrom.selected) {
        // create binary and decimal options in "convert to" dropdown
        let binaryOptionTo = document.createElement("option");
        binaryOptionTo.textContent = "Binary";
    
        let decimalOptionTo = document.createElement("option");
        decimalOptionTo.textContent = "Decimal";
    
        // append to DOM
        convertToDropDown.appendChild(binaryOptionTo);
        convertToDropDown.appendChild(decimalOptionTo);
    }
    // else decimal option selected
    else {
        // create binary and hex options in "convert to" dropdown
        let binaryOptionTo = document.createElement("option");
        binaryOptionTo.textContent = "Binary";
    
        let hexOptionTo = document.createElement("option");
        hexOptionTo.textContent = "Hexadecimal";
    
        // append to DOM
        convertToDropDown.appendChild(binaryOptionTo);
        convertToDropDown.appendChild(hexOptionTo);
    }
}

/* this function converts from a binary value to a decimal value */
function binaryToDecimal() {
    // select "convert from" textbox
    let binary = document.getElementById("converter-from-textbox").value;
    let decimal = 0;

    // iterate backwards
    for (let i = binary.length - 1; i > -1; i--) {
        let position = binary.length - i;
        console.log("position: " + position + ", value: " + binary[i]);
        switch(position) {
            case 1: if (binary[i] == "1") {
                        decimal += 1;
                    }
                    break;
            case 2: if (binary[i] == "1") {
                        decimal += 2;
                    }
                    break;
            case 3: if (binary[i] == "1") {
                        decimal += 4;
                        console.log(decimal);
                    }
                    break;
            case 4: if (binary[i] == "1") {
                        decimal += 8;
                    }
                    break;
            case 5: if (binary[i] == "1") {
                        decimal += 16;
                    }
                    break;
            case 6: if (binary[i] == "1") {
                        decimal += 32;
                    }
                    break;
            case 7: if (binary[i] == "1") {
                    decimal += 64;
                }
                    break;
            case 8: if (binary[i] == "1") {
                        decimal += 128;
                    }
                    break;
        }

    }

    document.getElementById("converter-to-textbox").value = decimal;
}