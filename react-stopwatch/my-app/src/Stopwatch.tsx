import { useState } from 'react';
import './App.css';
import './Stopwatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [elapsedTime, setElapsedTime] = useState(0);
  const isPlaying = intervalId; //starts with falsy, not running

  //when user clicks stopwatch face & stopwatch is paused
  //time resets to zero
  function handleFaceClick(): void {
    if (isPlaying) return;
    setElapsedTime(0);
  }

  //when the user clicks play icon
  //stopwatch begins ticking every second
  //play icon becomes a pause icon
  function handlePlay(): void {
    const newIntervalId = setInterval(() => setElapsedTime((t) => t + 1), 1000); //sets up a timer that calls setter function to update state every second
    setIntervalId(newIntervalId); //timer is running, update state, triggers re-render
  }

  //when user clicks pause icon
  //stopwatch stops clicking
  //pause icon becomes play icon
  function handlePause(): void {
    clearInterval(intervalId); //stops the timer, component doesn't know because state has not changed
    setIntervalId(undefined); //isPlaying is falsy, updating component's state, triggers re-render, updating icon
  }

  return (
    <div className="container">
      <div
        className="face"
        onClick={handleFaceClick}
        style={{ cursor: isPlaying ? 'default' : 'pointer' }}>
        <span>{elapsedTime}</span>
      </div>
      {isPlaying ? (
        <FaPause onClick={handlePause} className="icon" />
      ) : (
        <FaPlay onClick={handlePlay} className="icon" />
      )}
    </div>
  );
}
