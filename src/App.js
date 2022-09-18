import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentsCard from './StudentsCard';
import StudentInfo from './StudentInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/students" element={<StudentsCard />} />
        <Route path="/students/:id" element={<StudentInfo />} />
      </Routes>
    </div>
  );
}

export default App;
