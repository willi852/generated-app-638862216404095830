import { useState } from 'react';
import CalculatorDisplay from './components/CalculatorDisplay';
import Keypad from './components/Keypad';
import './styles/App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');
  const [isScientificMode, setIsScientificMode] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearAll();
    } else if (value === 'DEL') {
      deleteLastChar();
    } else if (value === 'SCI') {
      toggleScientificMode();
    } else {
      setInput(prev => prev + value);
    }
  };

  const calculateResult = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: input }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(data.result.toString());
        setInput('');
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const clearAll = () => {
    setInput('');
    setResult('0');
  };

  const deleteLastChar = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const toggleScientificMode = () => {
    setIsScientificMode(!isScientificMode);
  };

  return (
    <div className="app">
      <h1>Scientific Calculator</h1>
      <div className="calculator">
        <CalculatorDisplay input={input} result={result} />
        <Keypad 
          onButtonClick={handleButtonClick} 
          isScientificMode={isScientificMode}
        />
      </div>
    </div>
  );
}

export default App;