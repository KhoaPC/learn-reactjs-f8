import { useEffect, useState } from "react";
import {memo} from 'react';
/*
1 UseEffect(callback)
- Gọi mỗi khi component re-render
- Gọi sau khi thêm component vào DOM
2 UseEffect(callback, [])
- Chỉ gọi 1 lần sau khi component mounted
3 UseEffect(callback, [deps])
- Được gọi mỗi khi deps thay đổi

Callback luôn được gọi sau khi component mounted
Cleanup function luôn được gọi trước component unmounted
Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
*/

function ContentChange() {
  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = title
  });
  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  )
}

function ContentCountdown() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
      console.log("Countdown");
    }, 1000);

    // Cleanup 
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="Content">
      <h1>{countdown}</h1>
    </div>
  );
}

const tabs = ["posts", "comments", "users"];
function ContentUseAPI() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("add");

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("remove");
    };
  }, []);

  return (
    <div className="Content">
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            tab === type
              ? { color: "#fff", backgroundColor: "#333" }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ol>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

function ContentGetImg() {
  const [avatars, setAvatars] = useState();

  useEffect(() => {
    // CleanUp
    return () => {
      // Xóa URL khỏi bộ nhớ khi thêm ảnh khác
      avatars && avatars.map((avatar) => URL.revokeObjectURL(avatar.preview));
    };
  }, [avatars]);

  const handlePreviewAvatar = (e) => {
    const files = [...e.target.files];
    files.map((file) => {
      // Tạo URL tạm thời trong bộ nhớ khi web hoạt động
      file.preview = URL.createObjectURL(file);
      console.log(file.preview);
      return file.preview;
    });
    setAvatars(files);
  };

  return (
    <div>
      <input type="file" multiple onChange={handlePreviewAvatar} />

      {avatars &&
        avatars.map((file) => (
          <img key={file.name} src={file.preview} alt="" width="80%" />
        ))}
    </div>
  );
}


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
function ContentX() {
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

export default  memo(ContentUseAPI);