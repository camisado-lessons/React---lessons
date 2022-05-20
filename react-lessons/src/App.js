import React, {useState} from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  let message;
  if(checked) {
    message = <div>
      <h2>Ура, вам уже есть 18</h2>
      <p>здесь расположен контент только для взрослых</p>
    </div>
  } else {
    message = <div>
      <p>
        увы, вам еще нет 18 лет:(
      </p>
    </div>
  }

  return (
    <div className="App">
      <label>
        Вам есть 18 лет?
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      </label>  
      {message}
    </div>
  );
}

export default App;