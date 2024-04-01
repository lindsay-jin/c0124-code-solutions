import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time + 1);
      console.log(`Time is: ${time}`);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [time]); //call useEffect when dependencies change
  // what goes in the backpack(created outside): setTimeout, setTime, time, clearTimeout, console => these are dependencies
  // but not all of them are necessary because some will never change so =>[time, setTime], setTime doesn't have to go in there either
  // because the reference to the function is always the same

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
