import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Landing/>
        <Routes>
          <Route path="/Incident"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
