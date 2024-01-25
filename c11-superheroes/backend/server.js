import express from "express";
import dotenv from "dotenv";
import {
  createSuperhero,
  listSuperheroes,
} from "./db/models/superheroModel.js";
dotenv.config();

console.log("mongourl: ", process.env.MONGO_URL);
const app = express();

app.use(express.json());

app.all("*", (req, res, next) => {
  console.log("path is", req.path);
  next();
});

app.get("/api", async (request, response) => {
  const allSuperheroes = await listSuperheroes();
  response.send(allSuperheroes);
});

app.post("/api", async (request, response) => {
  const newSuperhero = request.body;
  console.log("newSuperhero", newSuperhero);
  const createdSuperhero = await createSuperhero(newSuperhero);
  response.send(createdSuperhero);
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
