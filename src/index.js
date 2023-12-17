function displayGame(response) {
  new Typewriter("#game", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateGame(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3ea9t1312bbo2ff30fa1b499f43ab01f";
  let prompt = `User instructions: Generate a Christmas party game about${instructionsInput.value} `;
  let context =
    "You love Christmas and you know how to throw a good party. You know a lot of funny Christmas party games on different topics.Please generate a Christmas party game idea following the user instructions. Please present the result in bullet points please. Show each bullet point on a new line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#game");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Christmas party game about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayGame);
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
