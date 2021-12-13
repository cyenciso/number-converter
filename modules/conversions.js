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
    let value = document.getElementById("converter-from-textbox").value;

    // if "from" is binary
    if (conversion[0] == "b") {
        // and if "to" is decimal
        if (conversion[1] == "d") {
            document.getElementById("converter-to-textbox").value = binaryToDecimal(value);
        }
        // and if "to" is hex
        else {
            document.getElementById("converter-to-textbox").value = binaryToHex(value);
        }
    } 
    // if "from" is decimal
    else if (conversion[0] == "d") {
        
        if (conversion[1] == "b") {
            document.getElementById("converter-to-textbox").value = decimalToBinary(value);
        }
        // and if "to" is hex
        else {
            document.getElementById("converter-to-textbox").value = decimalToHex(value);
        }
    }
    // if "from" is hex
    else {
        // and if "to" is binary
        if (conversion[1] == "b") {
            document.getElementById("converter-to-textbox").value = hexToBinary(value);
        }
        // and if "to" is decimal
        else {
            document.getElementById("converter-to-textbox").value = hexToDecimal(value);
        }
    }
}

/* this function converts from a binary value to a decimal value */
function binaryToDecimal(value) {
    // select "convert from" textbox
    let binary = value;
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

    return decimal;
}

function decimalToBinary(value) {
    // select "convert from" textbox
    let decimal = value;
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

    // change from string to array, reverse, change back to string
    binary = binary.split("").reverse().join("");
    return binary;
}

function binaryToHex(value) {
    // select "convert from" textbox
    let binary = value;
    let hex = "";

    // break up bits into nibbles and save into an array
    let arrayOfNibbles = [];

    // iterate backwards
    for (let i = binary.length - 1; i > -1; i -= 4) {
        let nibble = "";

        // if you have four bits to group
        if (i - 3 > -1) {
            nibble = binary[i-3]  + binary[i-2]  + binary[i-1]  + binary[i]; 
        } 
        // if you have 3 bits to group
        else if (i - 2 > -1) {
            nibble = binary[i-2]  + binary[i-1]  + binary[i]; 
        }
        // if you have 2 bits to group
        else if (i - 1 > -1) {
            nibble = binary[i-1]  + binary[i]; 
        }
        // if you have 1 bit to group
        else {
            nibble = binary[i];
        }

        arrayOfNibbles.unshift(nibble);
    }

    console.log(arrayOfNibbles);
    
    // then process the array: for every nibble
    for (let i = 0; i < arrayOfNibbles.length; i++) {
        // map to hex value and append to hex 
        // (use binary to decimal for 0-9)
        if (binaryToDecimal(arrayOfNibbles[i]) < 10) {
            hex += binaryToDecimal(arrayOfNibbles[i]);
            console.log(hex);
        }
        else {
            switch(arrayOfNibbles[i]) {
                case "1010": hex += "A"; 
                break;
                case "1011": hex += "B"; 
                break;
                case "1100": hex += "C"; 
                break;
                case "1101": hex += "D"; 
                break;
                case "1110": hex += "E"; 
                break;
                case "1011": hex += "F"; 
                break;
            }
            console.log(hex);
        }
    }

    return hex;
}

function hexToBinary(value) {
    let hex = value;
    let binary = "";

    // every value represents four bits
    // iterate over hex number
    for (let i = 0; i < hex.length; i++) {
        // if the value is 0-9
        if (hex[i] >= 0 && hex[i] <= 9) {
            let nibble = decimalToBinary(hex[i]);

            // pad the nibble
            let padding = 4 - decimalToBinary(hex[i]).length;
            
            for (let i = 0; i < padding; i++) {
                nibble = "0" + nibble;
            }

            binary += nibble;
        }
        // if value is in range A-F
        else {
            switch(hex[i].toUpperCase()) {
                case "A": binary += "1010"; 
                break;
                case "B": binary += "1011"; 
                break;
                case "C": binary += "1100"; 
                break;
                case "D": binary += "1101"; 
                break;
                case "E": binary += "1110"; 
                break;
                case "F": binary += "1011"; 
                break;
            }
        }
        console.log(binary);
    }

    // remove any leading zeros
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            console.log(binary.slice(i));
            binary = binary.slice(i);
            console.log(binary + " after slice");
            break;
        }
    }

    return binary;
}

function hexToDecimal(value) {
    let hex = value;
    let decimal = 0;

    // iterate backwards
    for (let i = hex.length - 1; i > -1; i--) {
        // get the position (from right to left starting with 1)
        let position = hex.length - i;
        console.log("position: " + position + ", value: " + hex[i]);

        // multiply the value and the order of magnitude
        // if already a number, do conversion:
        if (hex[i] >= 0 && hex[i] <= 9) {
            decimal += hex[i] * (16**(position - 1));
        }
        // else, convert to number then do conversion:
        else {
            switch(hex[i].toUpperCase()) {
                case "A": decimal += 10 * (16**(position - 1)); 
                break;
                case "B": decimal += 11 * (16**(position - 1));
                break;
                case "C": decimal += 12 * (16**(position - 1));
                break;
                case "D": decimal += 13 * (16**(position - 1));
                break;
                case "E": decimal += 14 * (16**(position - 1));
                break;
                case "F": decimal += 15 * (16**(position - 1)); 
                break;
            }
        }
            
    }

    return decimal;
}

function decimalToHex(value) {
// select "convert from" textbox
let decimal = value;
let hex = "";

/* To convert a decimal to binary, divide it repeatedly by 2 and note the remainders. take the reverse as the binary representation: https://www.cuemath.com/numbers/decimal-to-binary/ */

// while we still have a number we need to divide
while (decimal != 0) {
    // if not, get remainder for hex digit
    switch(decimal % 16) {
        case 0: hex += "0"; 
        break;
        case 1: hex += "1"; 
        break;
        case 2: hex += "2"; 
        break;
        case 3: hex += "3"; 
        break;
        case 4: hex += "4"; 
        break;
        case 5: hex += "5"; 
        break;
        case 6: hex += "6"; 
        break;
        case 7: hex += "7"; 
        break;
        case 8: hex += "8"; 
        break;
        case 9: hex += "9"; 
        break;
        case 10: hex += "A"; 
        break;
        case 11: hex += "B"; 
        break;
        case 12: hex += "C"; 
        break;
        case 13: hex += "D"; 
        break;
        case 14: hex += "E"; 
        break;
        case 15: hex += "F"; 
        break;
    }
    decimal = Math.floor(decimal / 16); 
}

// change from string to array, reverse, change back to string
hex = hex.split("").reverse().join("");
return hex;
}


export {detectConversion, makeConversionCall, binaryToDecimal, decimalToBinary, binaryToHex, hexToBinary, hexToDecimal, decimalToHex};