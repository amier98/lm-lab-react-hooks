import { useEffect, useState } from "react";

//"https://jsonplaceholder.typicode.com/todos/1"

// make an api call using useEffect
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const APICall = () => {
  const [json, setJson] = useState<ToDo | null>(null);
  useEffect(() => {
    const fetchToDo = async () => {
      // Your code here!
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await result.json();
        setJson(data);
      } catch (error) {}
    };
    fetchToDo();
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <p>{json?.id}</p>
      <p>{json?.title}</p>
      <p>{json?.completed}</p>
      <p>{json?.userId}</p>
    </div>
  );
};
