import { Route, Routes, useLocation } from "react-router-dom";
import { Home, LandingPage, Form, Detail, Login, Register } from "./views";
import "./fonts/Wifty.ttf";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
