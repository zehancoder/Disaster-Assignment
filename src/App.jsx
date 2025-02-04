import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandingPage";
import { NavFunc } from "./components/fixedComponent/Navber";
import { IncidentFunc } from "./components/Incidents";
import { CreateIncidentFunc } from "./components/CreateIncidentCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavFunc/>
        <Routes>
          <Route path="/" element = {<Landing/>}/>
          <Route path="/Incidents" element = {<IncidentFunc/>}></Route>
          <Route path="/CreateIncident" element = {<CreateIncidentFunc/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
