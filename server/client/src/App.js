import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import HomePage from "./pages/HomePage";
import PhoneDetails from "./pages/PhoneDetails"




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/phones/:phoneId" element={<PhoneDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
