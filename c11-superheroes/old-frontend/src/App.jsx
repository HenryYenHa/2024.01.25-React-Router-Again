import { useEffect, useState } from "react";
import { SuperheroDetail } from "./SuperheroDetail";

import "./App.css";

const superheroes = [
  {
    name: "Flash",
    power: "Speed",
    homeCity: "Central City",
    alterEgo: "Barry Allen",
    color: "yellow",
  },
  {
    name: "Spider-man",
    power: "Web-slinging",
    homeCity: "New York City",
    alterEgo: "Peter Parker",
    color: "blue",
  },
  {
    name: "Superman",
    power: "Super Strength",
    homeCity: "Metropolis",
    alterEgo: "Clark Kent",
    color: "red",
  },
];

function App() {
  const [superheroesList, setSuperheroesList] = useState();
  useEffect(() => {
    console.log("calling useEffect function");
    setSuperheroesList(superheroes);
  }, []);

  console.log("superheroesList", superheroesList);
  return (
    <div>
      <h1>Superhero Registry</h1>

      {superheroesList != undefined ? (
        superheroesList.map((superhero, index) => {
          return <SuperheroDetail key={superhero.name} superhero={superhero} />;
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default App;

// [1, 2, 3].map((number) => {
//   return number * 2;
// });

// [2, 4, 6];
