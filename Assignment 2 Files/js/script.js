let finalChoices = document.querySelector(".final_choices")

document.getElementById("submit").addEventListener("click", function(){


    event.preventDefault();

    let selectedBaseLiquid = "";
    let selectedFruits = [];
    let selectedSweeteners = [];
    let selectedThickener = [];

    let baseLiquid = document.getElementsByName("base-liquid");
    for (let i = 0; i < baseLiquid.length; i++) {
        if (baseLiquid[i].checked) {
            selectedBaseLiquid = baseLiquid[i].value;
            break;
        }
    }

    let checkBoxes = document.getElementsByName("fruit");
    for (let j = 0; j < checkBoxes.length; j++) {
        if (checkBoxes[j].checked) {
            selectedFruits.push(checkBoxes[j].value);
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

    console.log("Selected Base Liquid: " + selectedBaseLiquid);
    console.log("Selected Fruits and Vegetables: " + selectedFruits);
    console.log("Selected Sweetener: " + selectedSweeteners);
    console.log("Selected Thickener: " + selectedThickener);

    if (selectedSweeteners.length === 0 && !selectedThickener) {
        finalChoices.textContent = "You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits and vegetables.";
        console.log("You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits and vegetables.");
    } else if (selectedSweeteners.length > 0 && !selectedThickener){
        finalChoices.textContent = "You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits and vegetables, " + selectedSweeteners + " as the sweeteners and " + selectedThickener + " as the thickener.";
        console.log("You have selected " + selectedBaseLiquid + " as the base liquid and " + selectedFruits + " as the fruits and vegetables, " + selectedSweeteners + " as the sweeteners and " + selectedThickener + " as the thickener.");
    }
});