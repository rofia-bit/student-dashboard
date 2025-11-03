import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Repeat } from 'lucide-react';
import { addXP } from '../lib/gamify';

const WORK = 25 * 60;
const SHORT = 5 * 60;
const LONG = 15 * 60;

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(WORK);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('work'); // work | short | long
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds((s) => s - 1), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds <= 0) {
      // session finished
      setRunning(false);
      try {
        if (mode === 'work') addXP(15, 'pomodoro-complete');
      } catch {
        /* ignore */
      }
      // auto-switch to short break after work
      if (mode === 'work') {
        setMode('short');
        setSeconds(SHORT);
      } else {
        setMode('work');
        setSeconds(WORK);
      }
    }
  }, [seconds, mode]);

  function startPause() {
    setRunning((r) => !r);
  }

  function reset() {
    setRunning(false);
    if (mode === 'work') setSeconds(WORK);
    else if (mode === 'short') setSeconds(SHORT);
    else setSeconds(LONG);
  }

  function format(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  return (
    <div className="w-full sm:w-auto bg-card border border-border rounded-lg p-3 flex items-center gap-3">
      <div className="flex flex-col items-start">
        <div className="text-sm font-medium">Pomodoro</div>
        <div className="text-lg font-semibold mt-1">{format(seconds)}</div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button onClick={startPause} className="p-2 bg-primary text-primary-foreground rounded-lg">
          {!running ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <button onClick={reset} className="p-2 bg-secondary text-secondary-foreground rounded-lg">
          <Repeat className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
