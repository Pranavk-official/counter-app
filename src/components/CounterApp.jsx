import { useState, useEffect } from "react";
import { UserProfileCard } from "./UserProfileCard";
import { useFetchUserApi } from "../hooks/useFetchUserApi";

export function CounterApp() {
  const [count, setCount] = useState(1);
  const minCount = 1,
    maxCount = 10;
  const { user, loading } = useFetchUserApi(count);

  // Validate initial count
  useEffect(() => {
    if (count < minCount) {
      setCount(minCount); // Set to minimum if count is less than minimum
    }
    if (count > maxCount) {
      setCount(maxCount); // Set to maximum if count is greater than maximum
    }
  }, [count]);

  if (!loading) {
    return (
      <>
        <div>Loading.....</div>
      </>
    );
  }

  return (
    <>
      <h1>Simple Counter App</h1>
      <h2>Counter : {count}</h2>

      <div>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
        >
          -
        </button>
      </div>

      <br />
      <h1>User Profile Cards</h1>
      <UserProfileCard user={user} key={`user-${count}`} />
    </>
  );
}
