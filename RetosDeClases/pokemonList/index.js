for (let index = 0; index < 5; index++) {
    const id= Math.floor(Math.random()*100);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response =>response.json())
    .then(pokemonObj => {
        const lista = document.getElementById("pokemonList");

        let pokemon= document.createElement("div");
        pokemon.id={id};
        pokemon.className="title";

        pokemon.textContent = `Id:${pokemonObj.id} - Name: ${pokemonObj.name} `;
        lista.appendChild(pokemon);

        let pokemonIMG= document.createElement("img");
        pokemon.className="image"
        pokemonIMG.src=pokemonObj.sprites.front_default;
        lista.appendChild(pokemonIMG);
    });
}

