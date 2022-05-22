import React, {useState} from 'react';
import './App.css';

function App() {
  const texts = ['Минск', 'Витебск', 'Гродно', 'Брест'];
	const [value, setValue] = useState('');
  
  const options = texts.map((text, index) => {
    return <option key={index}>{text}</option>;
  })

  return (
    <div className="App">
      <select value={value} onChange={event => setValue(event.target.value)}>
        {options}
      </select>
      <p>Ваш город: {value}</p>
    </div>
  );
}

export default App;