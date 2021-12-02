// globals that I should probably get rid of later on
let convertFromDropDown = document.getElementById("converter-from-dropdown");
let convertToDropDown = document.getElementById("converter-to-dropdown");

// listen for a change in "convert from" dropdown
convertFromDropDown.addEventListener("change", converterOptionChange);

// #2. conversions for each: 
    // binary to decimal
    // decimal to binary

    // binary to hex
    // hex to binary

    // hex to decimal
    // decimal to hex

// #3. random value generator logic and correct answer


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