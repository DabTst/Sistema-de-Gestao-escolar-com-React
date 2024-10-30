import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import StudentDash from "./Pages/StudentDash";
import TeacherDash from "./Pages/TeacherDash";

function App() {
  return (
    <div className="inicial">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/StudentDash" element={<StudentDash />} />
          <Route path="/TeacherDash" element={<TeacherDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
