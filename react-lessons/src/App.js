import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(1);

  function changeHandler(event) {
    setValue(event.target.value);
  }
  
  return (
    <div className="App">
      <p>Какой ваш любимый язык программирования?</p>
      <input
        type="radio"
        name="radio"
        value="JavaScript"
        checked={value === 'JavaScript' ? true : false} 
        onChange={changeHandler}
      />
      <input 
        type="radio"
        name="radio"
        value="Phyton"
        checked={value === "Phyton" ? true : false}
        onChange={changeHandler}
      />
      <input 
        type="radio"
        name="radio"
        value="PHP"
        checked={value === "PHP" ? true: false}
        onChange={changeHandler} 
      />
      <p>{value === 'JavaScript' ? 'Поздравляю ваш язык JavaScript' : value}</p>
    </div>
  );
}

export default App;