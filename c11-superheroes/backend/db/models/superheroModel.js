import mongoose from "../mongoose.js";

const Schema = mongoose.Schema;

const superheroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  alterEgo: String,
  power: String,
  homeCity: String,
});

const Superhero = mongoose.model("Superhero", superheroSchema);

export const createSuperhero = async (superhero) => {
  const newSuperhero = await Superhero.create(superhero);
  return newSuperhero;
};

export const listSuperheroes = async () => {
  const allSuperheroes = await Superhero.find();
  return allSuperheroes;
};
