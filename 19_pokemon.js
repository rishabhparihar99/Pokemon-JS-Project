/* 

//Single pokemon game
const idPick = document.querySelector("#pokemonIdentification");
const pokeMon = document.createElement("img");
pokeMon.setAttribute(
  "src",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/4.png"
);
idPick.appendChild(pokeMon);

*/
for (let num = 1; num < 100; num++) {
  const pokemonDiv = document.createElement("div");
  const pokeMon = document.createElement("img");
  const numberPoke = document.createElement("span");
  pokeMon.setAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/" +
      num +
      ".png"
  );
  numberPoke.innerText = `#${num}`;
  pokemonDiv.appendChild(pokeMon);
  pokemonDiv.appendChild(numberPoke);
  const idPoke = document.querySelector("#pokemonIdentification");
  idPoke.appendChild(pokemonDiv);
}
