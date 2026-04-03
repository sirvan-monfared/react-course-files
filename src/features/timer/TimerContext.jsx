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
  const [timeLeft, setTimeLeft] = useState(() => {
    console.log('timer-timeLeft-new: ', localStorage.getItem('timer-timeLeft') ? JSON.parse(localStorage.getItem('timer-timeLeft')) : DEFAULT_WORK_TIME, DEFAULT_WORK_TIME);
    return localStorage.getItem('timer-timeLeft') ? JSON.parse(localStorage.getItem('timer-timeLeft')) : DEFAULT_WORK_TIME;
  });
  const [isRunning, setIsRunning] = useState(() => {
    return localStorage.getItem('timer-isRunning') ? JSON.parse(localStorage.getItem('timer-isRunning')) : false;
  });
  const [isBreak, setIsBreak] = useState(() => {
    return localStorage.getItem('timer-isBreak') ? JSON.parse(localStorage.getItem('timer-isBreak')) : false;
  });
  const [workDuration, setWorkDuration] = useState(() => {
    return localStorage.getItem('timer-workDuration') ? JSON.parse(localStorage.getItem('timer-workDuration')) : DEFAULT_WORK_TIME;
  });
  const [breakDuration, setBreakDuration] = useState(() => {
    return localStorage.getItem('timer-breakDuration') ? JSON.parse(localStorage.getItem('timer-breakDuration')) : DEFAULT_BREAK_TIME;
  });

  const prevIsBreakRef = useRef(undefined);

  // Format time as MM:SS
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

    localStorage.setItem('timer-timeLeft', JSON.stringify(timeLeft))

    if (isRunning && timeLeft === 0) {
      skipSession();
    }
  }, [timeLeft]);

  useEffect(() => {
    localStorage.setItem('timer-isBreak', JSON.stringify(isBreak));
    if (prevIsBreakRef.current === undefined) {
      prevIsBreakRef.current = isBreak;
      return;
    }
    if (prevIsBreakRef.current !== isBreak) {
      setTimeLeft(isBreak ? breakDuration : workDuration);
    }
    prevIsBreakRef.current = isBreak;
  }, [isBreak, breakDuration, workDuration]);

  useEffect(() => {
    localStorage.setItem('timer-isRunning', JSON.stringify(isRunning))
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem('timer-workDuration', JSON.stringify(workDuration))
  }, [workDuration]);

  useEffect(() => {
    localStorage.setItem('timer-breakDuration', JSON.stringify(breakDuration))
  }, [breakDuration]);

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
