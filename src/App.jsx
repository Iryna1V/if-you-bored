import { useEffect, useState } from "react";
import video from "./cat.mp4";
import "./App.css";

function App() {
  const [tips, setTips] = useState("");
  const yourTips = async () => {
    const response = await fetch("https://bored.api.lewagon.com/api/activity");
    const data = await response.json();
    setTips(data.activity);
  };

  useEffect(() => {
    yourTips();
  }, []);

  return (
    <div>
      <div className="conteiner">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1> Are you bored? Let's see what you should do: </h1>
      </div>
      <div className="conteiner">
        <h2> {tips} </h2>
      </div>
      <div className="conteiner">
        <button onClick={yourTips}> New Tip</button>
      </div>
    </div>
  );
}

export default App;
