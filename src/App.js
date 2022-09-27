
import Home from "./component/Home";
import Test from "./component/Test";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
         {/* eger path qoyulmursa ilk sehifede(localhost:3000/) Home acilacaq */}
         <Route path="/test" element={<Test />} /> 
         {/* bu sehife localhost:3000/test de acilmali */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
