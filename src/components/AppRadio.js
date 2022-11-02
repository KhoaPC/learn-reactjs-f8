import { useState } from "react";

export default function AppRadio({title}) {
  document.title = title;
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

  let disable = true;

  const handleDisable = () => {
    disable = false;
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={course.id === checked}
            onChange={() => {
              setChecked(handleDisable());
              setChecked(course.id);
            }}
          />
          {course.name}
        </div>
      ))}
      <button disabled={checked ? false : true} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
