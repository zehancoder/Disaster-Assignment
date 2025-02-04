import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandingPage";
import { NavFunc } from "./components/fixedComponent/Navber";
import { IncidentFunc } from "./components/Incidents";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavFunc/>
        <Routes>
          <Route path="/" element = {<Landing/>}/>
          <Route path="/Incidents" element = {<IncidentFunc/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
