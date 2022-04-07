import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from './Components/Sidebar/Sidebar'
import JellyfishView from './Containers/JellyfishView/JellyfishView'
import SquidView from './Containers/SquidView/SquidView'
import SeahorseView from "./Containers/SeahorseView/SeahorseView";
import TortoiseView from "./Containers/TortoiseView/TortoiseView";
import PufferView from "./Containers/PufferView/PufferView";

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Sidebar/>
      
          <Routes>

          {/* <Route path="/*" element={<JellyfishView/>}/> */}
          <Route path="/jellyfish" element={<JellyfishView/>}/>
          <Route path="/puffer" element={<PufferView/>}/>
          <Route path="/seahorse" element={<SeahorseView/>}/>
          <Route path="/tortoise" element={<TortoiseView/>}/>
          <Route path="/squid" element={<SquidView/>}/>
            
          </Routes>


      </BrowserRouter>
      
    </div>
  );
}

export default App;
