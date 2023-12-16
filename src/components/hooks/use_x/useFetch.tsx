import { useEffect, useState } from "react";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetch = (url: string) => {
  const [fetchDataApi, setData] = useState<TodoResponse>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {}
    };
    fetchData();
  }, [url]);

  return [fetchDataApi];
};

export default useFetch;
