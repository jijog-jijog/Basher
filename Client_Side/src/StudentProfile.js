import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";  // Main page where students register
import StudentProfile from "./pages/StudentProfile";  // Client-side student profile page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main student registration page */}
        <Route path="/" element={<Home />} />

        {/* Client interface to view student details globally */}
        <Route path="/student/:id" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
