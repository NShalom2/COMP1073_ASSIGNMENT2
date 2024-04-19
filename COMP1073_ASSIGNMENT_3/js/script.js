const searchString = document.querySelector(".search");
const form = document.querySelector("form");
const section = document.querySelector(".section");

form.addEventListener("submit", submit);

function submit(event){
    event.preventDefault();

    let url = `https://restcountries.com/v3.1/name/${searchString.value}`;

    fetch(url).then(result => {
        return result.json();
    }).then(json => {
        printResults(json)
    })
}

function printResults(json){
    console.log(json);
    const newSection = document.createElement("article");
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    };
    for(let i=0; i<json.length; i++) {
        const countryName = document.createElement("h1");
        const countryCapital = document.createElement("p");
        const countryFlag = document.createElement("img");
        const countryContinent = document.createElement("p");
        const countryPopulation = document.createElement("p");

        countryName.textContent = `${searchString.value}`;

        countryCapital.textContent = `Country Capital: ${json[i].capital}`;

        countryContinent.textContent = `Country Continent: ${json[i].continents}`

        countryPopulation.textContent = `Country Population: ${json[i].population}`

        countryFlag.src =`${json[i].flags.png}`;
        countryFlag.alt = `${searchString.value} Flag`;

        newSection.appendChild(countryName);
        newSection.appendChild(countryCapital);
        newSection.appendChild(countryPopulation);
        newSection.appendChild(countryContinent);
        newSection.appendChild(countryFlag);

        section.appendChild(newSection);
    }
}