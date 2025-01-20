import { useState } from "react";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const hanldeSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
