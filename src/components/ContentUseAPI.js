import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "users"];
export default function ContentUseAPI({title}) {
  document.title = title;

  const [titlex, setTitle] = useState("");
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
