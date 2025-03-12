// filepath: d:\Projects\Basher\Registration_Form\src\App.jsx
import { Routes, Route } from 'react-router-dom';
import StudentProfile from './StudentProfile';
import Home from './Home'; // Create a Home component if you don't have one
import Students from './students';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student/:id" element={<StudentProfile />} />
      <Route path='/students' element={<Students/>} />
    </Routes>
  );
};

export default App;