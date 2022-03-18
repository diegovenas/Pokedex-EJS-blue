const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

const pokedex = [
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    id: 1,
    nome: "bubasauro",
    tipo: "Grass",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
  },

  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    id: 2,
    nome: "Charmander",
    tipo: "Fire",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
  },

  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    id: 3,
    nome: "Blastoise",
    tipo: "Water",
    descricao:
      "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
  },
];

const addId ()=>{
  let mudah2 = document.querySelector('h2')
  let aleatorio = 3 * Math.random()
  
  const altera ()=>{
    mudah2.innerText =
  }

   
}

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
