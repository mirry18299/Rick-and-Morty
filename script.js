
const cardContainer =document.querySelector("#card-container")

handleFilter = (search, page =1)=> {
    constrequestOption = {
        method: "GET"
    };
    const filterCharacterByName =(name, characters, setResults) => {
        if(name==="")
        setResults([])
    }
    const filterCharacterByStatus =(alive, dead,setResults) => {
        if(status="alive")
        setResults([])
}}
fetch("https://rickandmortyapi.com/api/character")
.then(response=> response.json())
.then(data =>makeCards(data.results))

function makeCards(characterArray) {
    const cardContainer=document.querySelector("#card-container")
    console.log(characterArray)
    characterArray.forEach(character => {
        cardContainer.innerHTML = cardContainer.innerHTML +
     `<div id="character-card-${character.is}"
     <h2>${character.name}</h2>
     <img src=${character.image} ></img> 
     </div>
     `
    })
}

handleFilter = (search, page =1) => {
    constrequestOption = {
        method: "GET"
    }}
    fetch("https://rickandmortyapi.com/api/location")
    .then(response=> response.json())
    .then(data => (data.results))
