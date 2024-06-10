import { useState, useRef } from "react";

export function UserInputForm() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Basic validation
    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    }

    console.log(name); // Print the input value in console
    inputRef.current.focus(); // Focus the input element after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter your name:</label>
        <br />
        <input
          id="input"
          type="text"
          value={name}
          onChange={handleChange}
          ref={inputRef} // Attach the ref here
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
