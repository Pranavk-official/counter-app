import { useEffect, useState } from "react";

export function useFetchUserApi(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const controller = AbortController;
    async function fetchUsers() {
      try {
        const url = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(`${url}/${userId}`, {
          signal: controller.signal,
        });
        const data = await response.json();
        setLoading(true);
        setError(undefined);
        setUserData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error(error);
      }
    }

    fetchUsers();

    return () => {
      controller.abort;
    };
  }, [userId]);

  return { user: userData, loading, error };
}
