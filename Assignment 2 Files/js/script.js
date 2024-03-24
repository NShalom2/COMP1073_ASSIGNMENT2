const body = document.querySelector("body");

document.getElementById("submit").addEventListener("click", function(){


    event.preventDefault();

    let selectedRadioValue = "";
    let selectedCheckValues = [];

    let radioButtons = document.getElementsByName("base-liquid");
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedRadioValue = radioButtons[i].value;
            break;
        }
    }

    let checkBoxes = document.getElementsByName("fruit");
    for (let j = 0; j < checkBoxes.length; j++) {
        if (checkBoxes[j].checked) {
            selectedCheckValues.push(checkBoxes[j].value);
        }
    }

    console.log("Selected radio value: " + selectedRadioValue);
    console.log("Selected checkbox values: " + selectedCheckValues);
});