import { useState } from "react";
import './index.css';

function App() {
  const [ text, setText ] = useState("");

  function handleSubmit(){

  }
  return (
    <div className="App">
      <textarea placeholder="Digite aí" rows={15} onChange={(e) => setText(e.target.value)}></textarea>
      <div className="mirror">
        <h1>Código</h1>
        <p className="text">
           {text}
        </p>
        
      </div>
    </div >
  );
}

export default App;
