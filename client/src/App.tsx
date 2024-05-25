import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
