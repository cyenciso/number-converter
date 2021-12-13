import * as Conversions from './modules/conversions.js';
import * as TextboxHandler from './modules/textbox-handler.js';

// listen for a change in "convert from" dropdown, change "convert to" dropdown appropriately
TextboxHandler.convertFromDropDown.addEventListener("change", TextboxHandler.converterOptionChange);

// select converter button and listen for click event then make appropriate conversion
document.getElementById("converter-button").addEventListener("click", (e) => {
    e.preventDefault();
    let conversion = Conversions.detectConversion();
    Conversions.makeConversionCall(conversion);
});

// #3. random value generator logic and correct answer

// #4. UI!

// #5. validate user input

// #6. animations of a step-by-step example of each conversion
