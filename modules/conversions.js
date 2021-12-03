// select convert to and from dropdowns 
let convertFromDropDown = document.getElementById("converter-from-dropdown");
let convertToDropDown = document.getElementById("converter-to-dropdown");

/* this function checks the dropdowns for the currect conversion */
function detectConversion() {
    // select dropdown elements
    let binaryOptionFrom = convertFromDropDown.firstElementChild;
    let hexOptionFrom = convertFromDropDown.lastElementChild;

    // if binary selected
    if (binaryOptionFrom.selected) {
        // check if either decimal or hex is selected
        let decimalOptionTo = convertToDropDown.firstElementChild;
        if (decimalOptionTo.selected) {
            return "bd";
        } else {
            return "bh";
        }
    } 
    // if hex selected
    else if (hexOptionFrom.selected) {
        // check if either binary or decimal is selected
        let binaryOptionTo = convertToDropDown.firstElementChild;
        if (binaryOptionTo.selected) {
            return "hb";
        } else {
            return "hd";
        }
    }
    // decimal selected
    else {
        // check if either binary or hex is selected
        let binaryOptionTo = convertToDropDown.firstElementChild;
        if (binaryOptionTo.selected) {
            return "db";
        } else {
            return "dh";
        }
    }
}

function makeConversionCall(conversion) {
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
        }
        // and if "to" is hex
        else {
            
        }
    }
    // if "from" is hex
    else {
        // and if "to" is binary
        if (conversion[1] == "b") {
        }
        // and if "to" is decimal
        else {
            
        }
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

export {detectConversion, makeConversionCall, binaryToDecimal};