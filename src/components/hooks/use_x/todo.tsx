import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";
import useFetch from "./useFetch";

/** This is the response that TypiCode gives for the /todos/ endpoint */

export const Todo = () => {
  const [isFetching, setIsFetching] = useState(true);

  const [info] = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
      <h2>Custom Hook</h2>

      <p>{info?.title}</p>
    </>
  );
};
