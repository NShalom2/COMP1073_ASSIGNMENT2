const baseLiquidsError = document.querySelector(".base_liquids_error");
const fruitsError = document.querySelector(".fruits_error");
const orderNow = document.querySelector(".orderNow");
const orderUp = document.querySelector(".orderUp");
const button = document.getElementById("submit");
const outputOrder = document.querySelector(".outputOrder");
const imageDiv = document.querySelector(".imageDiv");
const image = document.createElement("img");
const goBack = document.querySelector(".goBack");

// Variables used in this JS
let userInput;
let selectedBaseLiquid = "";
let selectedFruits = [];
let selectedSweeteners = [];
let selectedThickener = "";

// Event listener that takes you back to the first page
goBack.addEventListener("click", function(){
    location.reload();
})

// Event listener for the submit button
button.addEventListener("click", function(){

    event.preventDefault(); // Prevents the form from actually submitting

    let baseLiquid = document.getElementsByName("base-liquid");
    for (let i = 0; i < baseLiquid.length; i++) {
        if (baseLiquid[i].checked) {
            baseLiquidsError.remove();
            selectedBaseLiquid = baseLiquid[i].value; // Stores the selected base liquid value in the variable we declared above
            break;
        }
    }

    let fruits = document.getElementsByName("fruit");
    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j].checked) {
            fruitsError.remove();
            selectedFruits.push(fruits[j].value);// Pushes the values of fruits the user selects into the array that we declared
        }
    }

    let sweetenerCheckBoxes = document.getElementsByName("sweetener");
    for (let k = 0; k < sweetenerCheckBoxes.length; k++) {
        if (sweetenerCheckBoxes[k].checked) {
            selectedSweeteners.push(sweetenerCheckBoxes[k].value);// Also pushes the selected values into the array
        }
    }

    let thickener = document.getElementsByName("thickener");
    for (let l = 0; l < thickener.length; l++) {
        if (thickener[l].checked) {
            selectedThickener = thickener[l].value;// Stores the selected thickener value in one of the variable we declared
            break;
        }
    }

    // If the base liquid is left blank, the windows scrolls back up to it, and a red message appears
    if (!selectedBaseLiquid){
        window.scroll(0, 200);
        baseLiquidsError.textContent = "* You must select a base liquid";
    } else if(selectedFruits.length < 1) { // Same thing happens when you leave the fruits part empty
        window.scroll(0, 300);
        fruitsError.textContent = "* You must select one or more fruits or vegetables";
    } else {
        // These print statements are meant to print the choices the user selects onto the screen.
        if (selectedSweeteners.length === 0 && !selectedThickener){ // This checks whether both of these are empty, because they are optional.
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits or vegetables and no sweeteners or thickeners. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " with no sweeteners or thickeners has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length > 0 && selectedThickener !== ""){ // This checks if both of them have values, so that they can be outputted
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, " + selectedSweeteners + " as the sweetener(s) and " + selectedThickener + " as  the thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " fruits, " + selectedSweeteners + " sweetener and " + selectedThickener + " thickener has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length > 0 && !selectedThickener){ // This one checks if the selected thickener is blank
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, " + selectedSweeteners + " as the sweetener(s) and no thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " , " + selectedSweeteners + " sweetener and no thickener has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length === 0 && selectedThickener !== ""){ // This one checks if the selected sweetener is blank
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, no sweetener(s) and " + selectedThickener + " as  the thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " and " + selectedThickener + " thickener and no sweetener has been served.";
            userInputFunction(userInput);
        }
    }


    function userInputFunction(value){
        // This function accepts user input, and changes what the user sees on the screen
        if (value.toLowerCase()[0] === 'y') {
            orderNow.style.display = "none"; // The Order section displays nothing
            orderUp.style.display = "block"; // The final section which had a none display now shows
            image.setAttribute("src", `img/smoothies/${selectedBaseLiquid}.jpg`); //This adds an image to the screen
            imageDiv.appendChild(image); // The image is appended to a div function I called above
        } else if (value.toLowerCase()[0] !== 'y'){
            location.reload(); // This reloads the entire page which takes you back to the starter page.
        }
    }
})

