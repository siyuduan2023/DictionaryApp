// step 1: fetch data use a function and returning it
//   input: nothing
//   output: word data

let inpWord = document.getElementById("inp").value;

const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const searchBox = document.querySelector("#inp");
const searchBtn = document.querySelector("#search-btn");

async function fetchWordData() {
  const response = await fetch(apiURL + searchBox.value);

  //TODO: check if response is ok

  //convert reponse to json data
  const wordData = await response.json();
  return wordData;
}
console.log(fetchWordData());

// function: display feched info on the page
//   input: fetched info
//   output: nothing (does sth, doesn't produce a value)
function displayWordData(randomInput) {
    const word = randomInput[0].word;
    const pos = randomInput[0].meanings[0].partOfSpeech;
    const sound = randomInput[0].phonetic;
    const meaning = randomInput[0].meanings[0].definitions[0].definition;
  
   
    const wordsElement = document.querySelector("#words");
    const posElement = document.querySelector("#pos");
    const soundElement = document.querySelector("#sound");
    const meaningElement = document.querySelector("#meaning");
    wordsElement.textContent = `${word}`;
    posElement.textContent = `${pos}`;
    soundElement.textContent = `${sound}`;
    meaningElement.textContent = `Meaning: ${meaning}`;
}

//step 2: extract data
async function fetchAndDisplayWordData() {
  const wordData = await fetchWordData();
  displayWordData(wordData);
}

fetchAndDisplayWordData();

//get a reference to the button element

searchBtn.addEventListener("click", ()=>{
    fetchAndDisplayWordData(searchBox.value);
});


