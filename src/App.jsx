import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MyButton } from "./components/common/Button";
import { HeroFunc } from "./components/common/Hero";
import { TitleFunc, TitleTwo } from "./components/common/Title";
import { NavFunc } from "./components/fixedComponent/Navber";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyButton>Cypher AI</MyButton>
      <TitleFunc>Hello</TitleFunc> */}
        <TitleTwo>Dashboard</TitleTwo>
        <HeroFunc />
        <NavFunc />
      </BrowserRouter>
    </>
  );
}

export default App;
