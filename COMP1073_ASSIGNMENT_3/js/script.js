const searchString = document.querySelector(".search");
const form = document.querySelector("form");
const newSection = document.querySelector(".div-1");

form.addEventListener("submit", submit);

function submit(event){
    console.log("Form Submitted")
    event.preventDefault();

    let url = `https://restcountries.com/v3.1/name/${searchString.value}`;

    console.log(url);

    fetch(url).then(result => {
        return result.json();
    }).then(json => {
        printResults(json)
    })
}

function printResults(json){
    console.log(json);

    const countryName = document.createElement("h1");
    const countryCapital = document.createElement("p");
    const countryFlag = document.createElement("img");
    const countryContinent = document.createElement("p");

    while (newSection.firstChild) {
        newSection.removeChild(newSection.firstChild);
    }


}