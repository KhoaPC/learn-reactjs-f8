
import { useEffect, useState } from "react";

export default function ContentCountdown({title}) {
  document.title = title;

  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(prevState => prevState - 1);
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