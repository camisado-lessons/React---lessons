import React, {useState} from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(true);
  const [result, setResult] = useState(true);

  return (
    <div className="App">
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <button onClick={() => setResult(checked ? 'Hello' : 'Goodbye')}>btn</button>
      <p>{result}</p>
    </div>
  );
}

export default App;


/* 
  Задача: Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания.
*/