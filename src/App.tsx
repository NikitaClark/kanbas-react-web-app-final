import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./Kanbas/store"; // Import Redux store
import store from './store'

export default function App() {
  return (
    <Provider store={store}> {/* Provide Redux store to the whole app */}
      <HashRouter> {/* Routing for the application */}
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} /> {/* Default route */}
          <Route path="/Labs/*" element={<Labs />} /> {/* Labs section */}
          <Route path="/Kanbas/*" element={<Kanbas />} /> {/* Kanbas section */}
        </Routes>
      </HashRouter>
    </Provider>
  );
}
