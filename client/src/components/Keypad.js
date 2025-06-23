import React from 'react';

const Keypad = ({ onButtonClick, isScientificMode }) => {
  const basicButtons = [
    ['7', '8', '9', '/', 'C'],
    ['4', '5', '6', '*', 'DEL'],
    ['1', '2', '3', '-', '('],
    ['0', '.', '=', '+', ')'],
    ['SCI']
  ];

  const scientificButtons = [
    ['sin', 'cos', 'tan', 'log', 'ln'],
    ['π', 'e', '√', '^', '!'],
    ['(', ')', '%', 'abs', 'round']
  ];

  return (
    <div className="keypad">
      <div className="basic-buttons">
        {basicButtons.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((button) => (
              <button 
                key={button}
                onClick={() => onButtonClick(button)}
                className={`button ${isNaN(button) ? 'operation' : 'number'}`}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>

      {isScientificMode && (
        <div className="scientific-buttons">
          {scientificButtons.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((button) => (
                <button
                  key={button}
                  onClick={() => onButtonClick(button)}
                  className="scientific-button"
                >
                  {button}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Keypad;