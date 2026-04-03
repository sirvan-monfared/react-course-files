import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import NavigationContextProvider from "./store/NavigationContext.jsx";
import HabitProvider from "./features/habits/HabitContext.jsx";
import TimerProvider from "./features/timer/TimerContext.jsx";
import NoteProvider from "./features/notes/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimerProvider>
      <NavigationContextProvider>
        <HabitProvider>
          <NoteProvider>
            <App />
          </NoteProvider>
        </HabitProvider>
      </NavigationContextProvider>
    </TimerProvider>
  </StrictMode>,
);
