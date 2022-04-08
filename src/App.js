import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import AnimalView from "./Containers/AnimalView/AnimalView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<AnimalView/>}/>
          <Route path="/*" element={<AnimalView/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
