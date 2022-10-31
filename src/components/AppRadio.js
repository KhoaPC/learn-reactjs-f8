import { useState } from "react";

export default function AppRadio() {
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "JavaScript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];
  const [checked, setChecked] = useState();

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={course.id === checked}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
