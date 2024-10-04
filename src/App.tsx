import Labs from "./Labs";
import Kanbas from "./Kanbas";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Default route redirects to Kanbas */}
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          
          {/* Route to Labs */}
          <Route path="/Labs/*" element={<Labs />} />
          
          {/* Route to Kanbas */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
