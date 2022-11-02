import { useState, useEffect } from "react";

export default function AppRandom({title}) {
  const listGifts = ["Keybord", "Mouse", "Screen", "Camera"];
  const [gift, setGift] = useState();

  document.title = title
  const randomGift = () => {
    const indexRandom = Math.floor(Math.random() * listGifts.length);

    // Thay đổi giá trị của 'gift' = listGifts[index]
    setGift(listGifts[indexRandom]);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>{gift || "Chưa có quà"}</h1>
      <button onClick={randomGift}>Lấy quà</button>
    </div>
  );
}
