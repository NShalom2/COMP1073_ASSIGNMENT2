const baseLiquidsError = document.querySelector(".base_liquids_error");
const fruitsError = document.querySelector(".fruits_error");
const orderNow = document.querySelector(".orderNow");
const orderUp = document.querySelector(".orderUp");
const button = document.getElementById("submit");
const outputOrder = document.querySelector(".outputOrder");
const imageDiv = document.querySelector(".imageDiv");
const image = document.createElement("img");
const goBack = document.querySelector(".goBack");

let userInput;
let selectedBaseLiquid = "";
let selectedFruits = [];
let selectedSweeteners = [];
let selectedThickener = "";

goBack.addEventListener("click", function(){
    location.reload();
})
button.addEventListener("click", function(){

    event.preventDefault();

    let baseLiquid = document.getElementsByName("base-liquid");
    for (let i = 0; i < baseLiquid.length; i++) {
        if (baseLiquid[i].checked) {
            baseLiquidsError.remove();
            selectedBaseLiquid = baseLiquid[i].value;
            break;
        }
    }

    let fruits = document.getElementsByName("fruit");
    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j].checked) {
            fruitsError.remove();
            selectedFruits.push(fruits[j].value);
        }
    }

    let sweetenerCheckBoxes = document.getElementsByName("sweetener");
    for (let k = 0; k < sweetenerCheckBoxes.length; k++) {
        if (sweetenerCheckBoxes[k].checked) {
            selectedSweeteners.push(sweetenerCheckBoxes[k].value);
        }
    }

    let thickener = document.getElementsByName("thickener");
    for (let l = 0; l < thickener.length; l++) {
        if (thickener[l].checked) {
            selectedThickener = thickener[l].value;
            break;
        }
    }

    if (!selectedBaseLiquid){
        window.scroll(0, 200);
        baseLiquidsError.textContent = "* You must select a base liquid";
    } else if(selectedFruits.length < 1) {
        window.scroll(0, 300);
        fruitsError.textContent = "* You must select one or more fruits or vegetables";
    } else {
        if (selectedSweeteners.length === 0 && !selectedThickener){
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits or vegetables and no sweeteners or thickeners. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " with no sweeteners or thickeners has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length > 0 && selectedThickener !== ""){
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, " + selectedSweeteners + " as the sweetener(s) and " + selectedThickener + " as  the thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " fruits, " + selectedSweeteners + " sweetener and " + selectedThickener + " thickener has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length > 0 && !selectedThickener){
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, " + selectedSweeteners + " as the sweetener(s) and no thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " , " + selectedSweeteners + " sweetener and no thickener has been served.";
            userInputFunction(userInput);
        } else if (selectedSweeteners.length === 0 && selectedThickener !== ""){
            userInput = prompt("You have selected " + selectedBaseLiquid + " as the base liquid, " + selectedFruits + " as the fruits or vegetables, no sweetener(s) and " + selectedThickener + " as  the thickener. Type 'Yes' if all looks good.");
            outputOrder.textContent = "Your " + selectedBaseLiquid + " Smoothie which contains " + selectedFruits + " and " + selectedThickener + " thickener and no sweetener has been served.";
            userInputFunction(userInput);
        }
        console.log(selectedThickener);
        console.log(selectedSweeteners);
    }


    function userInputFunction(value){
        if (value.toLowerCase()[0] === 'y') {
            orderNow.style.display = "none";
            orderUp.style.display = "block";
            image.setAttribute("src", `img/smoothies/${selectedBaseLiquid}.jpg`);
            console.log(image);
            imageDiv.appendChild(image);
        } else if (value.toLowerCase()[0] !== 'y'){
            location.reload();
        }
    }
})

