import { useState } from 'react';
import './App.css';

const label = 'Hot Button';
export default function HotButton() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  let color = 'navy';
  let letter = 'whiteLetter';
  if (clickCount > 17) {
    color = 'white';
    letter = 'blackLetter';
  } else if (clickCount > 14) {
    color = 'yellow';
    letter = 'blackLetter';
  } else if (clickCount > 11) {
    color = 'orange';
    letter = 'blackLetter';
  } else if (clickCount > 8) {
    color = 'pink';
    letter = 'whiteLetter';
  } else if (clickCount > 5) {
    color = 'lavender';
    letter = 'whiteLetter';
  }

  return (
    <div>
      <button
        className={`HotButton_button ${color} ${letter}`}
        onClick={handleClick}>
        {label}
      </button>
      <p>{clickCount} clicks</p>
    </div>
  );
}
