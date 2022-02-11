import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  Showcase,
  DashboardPage,
  NotFoundPages,
  Appointment,
  Project
} from './pages';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='showcase' element={<Showcase />} />
      <Route path='dashboard' element={<DashboardPage />} />
      <Route path='appointment' element={<Appointment />} />
      <Route path='project' element={<Project />} />
      <Route path='*' element={<NotFoundPages />} />
    </Routes>
  );
}

export default App;
