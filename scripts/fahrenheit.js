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
    let fahrenheit = Number(fahren.value);

    // us formula to compute a value for celsius
        let celsius;

        celsius = (fahrenheit-32) * (5 / 9);

    // put the result into the right textbox.

        cels.value = celsius;
 

}

