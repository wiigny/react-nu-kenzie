import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { PageInitial } from "./pages/PageInitial/PageInitial";

function App() {
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      {!check ? (
        <PageInitial setCheck={setCheck} />
      ) : (
        <Home setCheck={setCheck} />
      )}
    </div>
  );
}

export default App;
