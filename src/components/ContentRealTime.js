import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì?"
  },
  {
    id: 2,
    name: "SPA/MPA là gì?"
  },
  {
    id: 3,
    name: "Cách sử dụng useEffect?"
  }
];

// Thời  gian thực demo
export default function ContentX({title}) {
  document.title = title;
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const hanldeComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, hanldeComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, hanldeComment);
    };
  }, [lessonId]);

  return (
    <div className="Content">
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333"
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}