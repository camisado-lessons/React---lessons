import React, {useState} from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <select value={city} onChange={event => setCity(event.target.value)}>
        <option>Витебск</option>
        <option>Минск</option>
        <option>Гомель</option>
        <option>Гродно</option>
        <option>Могилев</option>
      </select>
      <p>Ваш город: {city}</p>
    </div>
  );
}

export default App;