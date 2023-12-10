function generateGame(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Musical chairs",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
