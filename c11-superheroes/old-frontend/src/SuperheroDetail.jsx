export function SuperheroDetail(props) {
  console.log("props", props);
  const superhero = props.superhero;
  console.log("superhero", superhero);
  return (
    <div>
      <h2 style={{ color: superhero.color }}>{superhero.name}</h2>
      <ul>
        <li>Power: {superhero.power}</li>
        <li>Home City: {superhero.homeCity}</li>
        <li>Alter Ego: {superhero.alterEgo}</li>
      </ul>
    </div>
  );
}
