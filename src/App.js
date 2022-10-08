import { useState } from 'react';
import './App.css';

function App() {
  const [conversionOut, setConversionOut] = useState(``)

  const api = 'https://v6.exchangerate-api.com/v6/2fefdf9a750573c0c4d6e10f/latest/USD';
  const value = document.getElementById('currencyVal').value;

  fetch(api + new URLSearchParams({
    key: api,
    base_code: 'USD',
    target_code: 'GBP',
    conversion_rate: target_code.conversion_rate,
    conversion_result: value / target_code.conversion_rate
  }))
  .then(response => response.json())
  .then(res => console.log(res)
  
  )
  return (
    <div className="App">
      <form>
        <label>How much money do you want to convert?</label>
        <input type='number' id='currencyVal'/>
        <input type='submit' value='Convert'/>
      </form>
      <h2>{setConversionOut(`${value} ${base_code} in ${target_code} is ${value}`)}</h2>
    </div>
  );
}

export default App;