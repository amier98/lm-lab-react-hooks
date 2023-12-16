import { useEffect, useRef, useState } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const InputRef = useRef(0);

  useEffect(() => {
    InputRef.current = InputRef.current + 1;
    console.log("triggered");
    console.log(InputRef.current);
  });

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {InputRef.current} times</p>
    </>
  );
};
