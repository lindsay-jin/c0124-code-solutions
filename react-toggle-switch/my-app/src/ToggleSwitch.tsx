import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [isToggled, setToggle] = useState(false); //toggle is off during the first render

  //when user clicks switch
  //background color changes
  //switch position changes
  //label changes
  function handleToggle(): void {
    setToggle(!isToggled);
  }

  const modifierClass = isToggled ? 'is-on' : '';

  return (
    <div className={`toggle-switch ${modifierClass}`}>
      <div className="slider">
        <div className="switch" onClick={handleToggle}></div>
      </div>
      {isToggled ? (
        <span className="state-label">ON</span>
      ) : (
        <span className="state-label">OFF</span>
      )}
    </div>
  );
}
