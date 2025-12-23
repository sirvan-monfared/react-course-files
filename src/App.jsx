import { use } from "react";
import Header from "./components/Header";
import DashboardPage from "./features/dashboard/DashboardPage";
import HabitsPage from "./features/habits/HabitsPage";
import NotesPage from "./features/notes/NotesPage";
import TimerPage from "./features/timer/TimerPage";
import { NavigationContext } from "./store/NavigationContext";


function AppContent() {
  const {currentPage} = use(NavigationContext);

  switch(currentPage) {
    case 'habits':
      return <HabitsPage/>
    case 'timer':
      return <TimerPage/>
    case 'notes':
      return <NotesPage/>
    case 'dashboard':
    default:
      return <DashboardPage/>
  }

}


export default function App() {

  return (
    <>
      <div className="min-h-screen bg-bg-primary">

        <Header/>

        <main className="pb-8">

          <AppContent/>
        </main>
      </div>
    </>
  );
}
