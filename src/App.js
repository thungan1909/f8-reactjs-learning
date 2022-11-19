import { useState } from "react";
import Content from "./Content";
export default function App() {
  const [show, setshow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setshow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}
