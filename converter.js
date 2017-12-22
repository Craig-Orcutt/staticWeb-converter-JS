// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature. DONE
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to. DONE
// Create a block level element that will hold the text of the converted temperature. DONE
// Create a button that, when clicked, displays the converted temperature. DONE
// Create another button that, when clicked, clears any text in the input field. DONE
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

let convertBtn = document.getElementById("convert");
let tempInput = document.getElementById("temp-input");
let clearField = document.getElementById("clearField");
let fahrenheit = document.getElementById("fahrenheit");
let celsius = document.getElementById("celsius");
let output = document.getElementById('your_temp');

clearField.addEventListener("click", function(){
    tempInput.value = ""
});

convertBtn.addEventListener("click", function(){
    let inputVal = tempInput.value;
    if(fahrenheit.checked === true){
        output.innerHTML = ((inputVal-32)/1.8) + ' Celsius';
        console.log('it fucking works')
    }else if(celsius.checked === true){
        output.innerHTML = ((inputVal*1.8)+32) + ' Fahrenheit';
    }else{
        output.innerHTML = 'Select a measure of Temperature';
    }
    
});
// function toCelsius (your_temp) {
            var determineconvert = function(){
                if(fahrenheit.checked){
                    (tempInput - 32) / 1.8;
                }
                else if (celsius.checked) {
                    (tempInput * 1.8) + 32;
                }
                else { console.log('nothing here')
            
                }
            }
//     document.getElementById("your_temp").innerHTML;
//    }
    
// //     function toFahrenheit () {
    
// //     }
    
// //     // Get a reference to the button element in the DOM
// //     var button = document.getElementById("converter");
    
// //     // This function should determine which conversion should
// //     // happen based on which radio button is selected.
// //     function determineConverter (clickEvent) {
// //       console.log("event", clickEvent);
// //     }
    
// //     // Assign a function to be executed when the button is clicked
    

// let checkinputs = function(){
//     if(tempInput.value != ""){
//         determineconvert;
//     }
//     else{
//         alert("nothing here");
//     }
// }


// convertBtn.addEventListener("click",checkinputs);


// function to determine which button is active


// console.log(determineconvert)
