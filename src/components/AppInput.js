import { useState } from "react";

export default function AppInput({ title = "React Examples" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  document.title = title;

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };
  return (
    <div style={{ padding: 40 }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Hello</button>
    </div>
  );
}
