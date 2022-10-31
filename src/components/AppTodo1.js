import { useState } from "react";

export default function AppTodo1() {
  const [note, setJob] = useState("");
  const [listNote, setJobs] = useState([]);

  const handleSubmit = () => {
    // Thêm note vào list
    setJobs((prev) => {
      const newJobs = [...prev, note];
      return newJobs;
    });
    // Value input = ''
    setJob("");
  };

  function handleDelete(index) {
    const newJobs = listNote.filter((value, i) => i !== index);
    // Set list note
    setJobs(newJobs);
  }

  return (
    <div className="App" style={{ padding: 30 }}>
      <input value={note} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {listNote.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
