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
    "You love Christmas and you know how to throw a good party. You are a comedian and you know a lot of funny Christmas party games on different topics.Please generate a Christmas party game idea following the user instructions. Use new lines for the description. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGame);
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
