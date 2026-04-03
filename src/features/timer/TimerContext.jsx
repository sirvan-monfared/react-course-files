import { createContext, useEffect, useRef, useState } from "react";

export const TimerContext = createContext({});

const DEFAULT_WORK_TIME = 25 * 60;
const DEFAULT_BREAK_TIME = 5 * 60;


console.log('timer-timeLeft: ', localStorage.getItem('timer-timeLeft'))
console.log('timer-isRunning:', localStorage.getItem('timer-isRunning'))
console.log('timer-isBreak:', localStorage.getItem('timer-isBreak'))
console.log('timer-workDuration:', localStorage.getItem('timer-workDuration'))
console.log('timer-breakDuration:', localStorage.getItem('timer-breakDuration'))

export default function TimerProvider({ children }) {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(DEFAULT_WORK_TIME);
  const [breakDuration, setBreakDuration] = useState(DEFAULT_BREAK_TIME);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimeLeft((old) => (isBreak ? breakDuration : workDuration));
  };

  const skipSession = () => {
    setIsRunning(false);
    setIsBreak((old) => !old);
  };

  const updateWorkDuration = (value) => {
    setWorkDuration(value * 60);

    if (!isBreak) {
      setIsRunning(false);
      setTimeLeft(value * 60);
    }
  };

  const updateBreakDuration = (value) => {
    setBreakDuration(value * 60);

    if (isBreak) {
      setIsRunning(false);
      setTimeLeft(value * 60);
    }
  };

  

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      setTimeLeft((old) => {
        return old - 1 > 0 ? old - 1 : 0;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  useEffect(() => {
    if (isRunning && timeLeft === 0) {
      skipSession();
    }
  }, [timeLeft]);

  useEffect(() => {
      setTimeLeft(isBreak ? breakDuration : workDuration);
  }, [isBreak]);


  const timerCtx = {
    timeLeft,
    isRunning,
    isBreak,
    workDuration,
    breakDuration,
    pauseTimer,
    startTimer,
    resetTimer,
    skipSession,
    updateWorkDuration,
    updateBreakDuration,
    formattedTime: formatTime(timeLeft),
  };

  return <TimerContext value={timerCtx}>{children}</TimerContext>;
}
