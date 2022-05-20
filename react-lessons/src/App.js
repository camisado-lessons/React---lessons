import React, {useState} from 'react';
import './App.css';

function App() {
  const [checkedHtml, setCheckedHtml] = useState(false);
  const [checkedCss, setCheckedCss] = useState(false);
  const [checkedJs, setCheckedJs] = useState(false);

  return (
    <div className="App">
      <input type="checkbox" checked={checkedHtml} onChange={() => setCheckedHtml(!checkedHtml)} />
      <input type="checkbox" checked={checkedCss} onChange={() => setCheckedCss(!checkedCss)} />
      <input type="checkbox" checked={checkedJs} onChange={() => setCheckedJs(!checkedJs)} />
      <p>You know: {checkedHtml ? 'html' : ''}</p>
      <p>You know: {checkedCss ? 'css' : ''}</p>
      <p>You know: {checkedJs ? 'js' : ''}</p>
    </div>
  );
}

export default App;