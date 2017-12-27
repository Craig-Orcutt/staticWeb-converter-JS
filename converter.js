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
let inputVal = tempInput.value;
// creating variables for input conversion to create integers instead of strings for the comparison style function?
farOutputVal = '';
celOutputVal = '';

clearField.addEventListener("click", function(){
    tempInput.value = ""
});

convertBtn.addEventListener('click', ()=>{
    let inputVal = tempInput.value;
    if(fahrenheit.checked){
        celOutputVal = ((inputVal-32)/1.8);
        
        if(celOutputVal < 0){
            output.classList.toggle('cold_temp');
        }
        else if (celOutputVal > 32){
            output.classList.toggle('hot_temp');
        }
        else{
            output;
        }
    output.innerHTML = celOutputVal;
    }
    else if(celsius.checked){
        farOutputVal = ((inputVal*1.8)+32);
        if(farOutputVal < 32){
            output.classList.toggle('cold_temp');
        }
        else if (farOutputVal > 89){
            output.classList.toggle('hot_temp');
        }
        else{
            output;
        }
    output.innerHTML = farOutputVal;
    }
    else{
        console.log('nothing');
    }
});

// let styleconvert= (something) => {
//         if(farInputVal.value < 32 ){
//             
//         }

//     else if (fahrenheit.checked && output > 32 || celsius.checked && output >90){
//         output.classList.add('hot_temp');
//     }
//     else {
//         console.log('nope')
//     }
  
// };

