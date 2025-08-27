import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();

    if (trimmedFirst && trimmedLast) {
      setFullName(`${trimmedFirst} ${trimmedLast}`);
    } else {
      setFullName(""); // don’t show full name if incomplete
    }
  }

  return (
    <div>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          aria-label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}
