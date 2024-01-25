import React, { useState } from "react";
import BlueBackground from "./BlueBackground";

const SuperheroForm = () => {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  console.log(alterEgo);
  const submitForm = async () => {
    const newSuperhero = {
      name,
      power,
      homeCity,
      alterEgo,
    };
    console.log("newSuperhero", newSuperhero);
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSuperhero),
    });
    const createdSuperhero = await response.json();
    console.log("createdSuperhero", createdSuperhero);
  };
  return (
    <div>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Power</label>
      <input value={power} onChange={(e) => setPower(e.target.value)} />
      <label>Home City</label>
      <input value={homeCity} onChange={(e) => setHomeCity(e.target.value)} />
      <label>Alter Ego</label>
      <input value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default SuperheroForm;
