"use strict";

window.onload = init;

const fahren = document.getElementById("fahrenheitInput");
const cels = document.getElementById("celsiusOutput");
const convert = document.getElementById("convertButton")

function init(){
    console.log("init");
    convert.onclick = onClickedConvert;
}

function onClickedConvert(){
    //console.log("onClickedConvert");

    //todo conversion
    // get what the user typed for fahrenheit
    let celsius = Number(cels.value);

    // us formula to compute a value for celsius
        let fahrenheit;

        fahrenheit = (celsius * 9/5) + 32;

    // put the result into the right textbox.

        fahren.value = fahrenheit;
 

}