import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandingPage";
import { NavFunc } from "./components/fixedComponent/Navber";
import { IncidentFunc } from "./components/Incidents";
import { CreateIncidentFunc } from "./components/CreateIncidentCard";
import ErrorsFunc from "./components/Page404Found";
import { SelectIncident } from "./components/CreateCardStep2";
import { StepThree } from "./components/CreateCardStep3";
import { StepFour } from "./components/CreateCardStep4";
import { LocationFunc } from "./components/Location";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavFunc/>
        <Routes>
          <Route path="/" element = {<Landing/>}/>
          <Route path="/Incidents" element = {<IncidentFunc/>}></Route>
          <Route path="/CreateIncident" element = {<CreateIncidentFunc/>}></Route>
          <Route path="/SelectIncident" element = {<SelectIncident/>}></Route>
          <Route path="/CardStep3" element = {<StepThree/>}></Route>
          <Route path="/CardStep4" element = {<StepFour/>}></Route>
          <Route path="/Locations" element = {<LocationFunc/>}></Route>
          <Route path="*" element = {<ErrorsFunc/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
