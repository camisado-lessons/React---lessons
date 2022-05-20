import React, {useState} from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  let message;
  if(checked) {
    message = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat et quo adipisci fuga aliquid. Quibusdam, repudiandae sunt inventore quidem ea aspernatur totam est numquam saepe autem sint rem odio cum?';
  }

  return (
    <div className="App">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <p>{message}</p>
    </div>
  );
}

export default App;