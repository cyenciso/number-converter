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
        decimalToBinary();
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
        // get the position (from right to left starting with 1)
        let position = binary.length - i;
        console.log("position: " + position + ", value: " + binary[i]);

        // if there is a 1 in the position, add the proper value
        if (binary[i] == "1") {
            decimal += 2**(position - 1);
        }
    }

    document.getElementById("converter-to-textbox").value = decimal;
}

function decimalToBinary() {
    // select "convert from" textbox
    let decimal = document.getElementById("converter-from-textbox").value;
    let binary = "";

    /* To convert a decimal to binary, divide it repeatedly by 2 and note the remainders. take the reverse as the binary representation: https://www.cuemath.com/numbers/decimal-to-binary/ */

    // while we still have a number we need to divide
    while (decimal != 0) {
        // check if it is divisible by two or no and add the appropriate value to the string
        if (decimal % 2 != 0) {
            decimal = Math.floor(decimal / 2); 
            binary += "1";
        } else {
            decimal = Math.floor(decimal / 2); 
            binary += "0";
        }
    }

    // change from string to array, reverse, change back to string, and change the "convert to" input value
    document.getElementById("converter-to-textbox").value = binary.split("").reverse().join("");

}
export {detectConversion, makeConversionCall, binaryToDecimal, decimalToBinary};