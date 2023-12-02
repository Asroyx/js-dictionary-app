const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.querySelector("#inp-word").value;
  
    fetch(`${url}${inpWord}`)
      .then(response => response.json())
      .then(data => console.log(data));
  });
  