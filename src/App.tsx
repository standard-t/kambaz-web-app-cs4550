
import Kambaz from "./Kambaz";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Project" element={<h1>Project</h1>} />
        </Routes>
      </div>
    </HashRouter >
  )
}

export default App
