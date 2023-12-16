import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState(0);
  const catEmoji: string[] = ["🐈"];

  //const cat = setCats(["🐈"].length);
  //console.log(cat)
  function handleClick() {
    setCats(cats + 1);
  }

  return (
    <>
      <h2>useState</h2>

      <p>{Array(cats).fill(catEmoji)}</p>

      <button onClick={handleClick}>{cats}</button>
    </>
  );
}
